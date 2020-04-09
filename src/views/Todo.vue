<template>
  <div class="home">
    <div class="container-fluid">
      <h3>ToDo-Liste</h3>
      <div class="input-group mb-3">
        <input type="text" v-model="taskInput" class="form-control" placeholder="Aufgabe" aria-label="Recipient's username" aria-describedby="button-addon2">
        <div class="input-group-append">
          <button @click="create" :disabled="!taskInput" class="btn btn-primary" type="button" id="button-addon2">Hinzufügen</button>
        </div>
      </div>
      <p>Unverifizierte Aktionen: {{ pendingActions }}</p>
      <button class="btn-primary btn" @click="mine" :disabled="pendingActions < 1 || mining">
        <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true" v-if="mining"></span>
        {{ mining ? 'Minen...' : 'Mine'}}
      </button>
      <br>
      <p class="center" v-if="parsing">
        <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
        Parsen...
      </p>
      <ul class="list-group" id="todo-list">
        <li v-for="item in list" :key="item.id" class="list-group-item d-flex justify-content-between align-items-center">
          {{ item.text }}
          <span class="badge badge-danger badge-pill delete-btn" @click="deleteItem" :id="item.id">X</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { chain } from '../main';
import ListAction from '../blockchain/ListAction';
import { actions } from '../blockchain/ListAction';

export default {
  name: 'Todo',
  data() {
    return {
      taskInput: '',
      list: [],
      pendingActions: 0,
      parseState: 0,
      mining: false,
      parsing: false
    };
  },
  methods: {
    create() {
      chain.addPendingAction('CREATE', null, Date.now(), this.taskInput);
      this.taskInput = '';
      this.pendingActions = chain.pendingActions.length;
    },
    deleteItem(event) {
      if(!chain.pendingActions.some(action => action.action === 'DELETE' && action.id === event.target.id)) {
        chain.addPendingAction('DELETE', event.target.id);
        this.pendingActions = chain.pendingActions.length;
      }
    },
    async mine() {
      this.mining = true;
      await chain.minePendingActions()
      this.mining = false;
      this.pendingActions = chain.pendingActions.length;
      this.parseChain();
    },
    parseChain() {
      this.parsing = true;
      const that = this;
      const chainToParse = [...chain.chain];
      chainToParse.splice(0,this.parseState);

      // Speichert die Aktionen aller Blöcke in einem Array
      const actionsToParse = chainToParse.map((block, i) => {
        that.parseState++;
        if(Array.isArray(block.body)) {
          const blockActions = [...block.body].filter(item => item instanceof ListAction);
          return blockActions;
        } else return null;
      })
        .flat() // Aktionen auf eine Array-Ebene bringen
        .filter(item => item instanceof ListAction) // Variablen, die keine Aktion sind aussortieren
        .sort((firstAction, secondAction) => { // Aktionen nach Zeit sortieren
          if(firstAction.timestamp < secondAction.timestamp) return -1;
          if(firstAction.timestamp > secondAction.timestamp) return 0;

          if(firstAction.timestamp === secondAction.timestamp) {
            console.log('Zwei Aktionen haben den gleichen Timestamp, dies kann zu problemen Führen');
            return 0;
          }
        });
      
      actionsToParse.forEach(action => {
        that.action(action.action, action.id, action.text)
      });
      this.parsing = false;
    },
    action(type, id, text) {
      if(!actions.includes(type)) return;
      switch(type) {
        case 'CREATE':
          this.list.push({ text, id });
          break;
        case 'DELETE':
          this.list = this.list.filter(item => item.id !== id );
          break;
      }
    }
  },
  created() {
    this.pendingActions = chain.pendingActions.length;
    this.parseChain();
  }
}
</script>
<style scoped>
.delete-btn {
  cursor: pointer;
}

.container-fluid {
  padding-top: 10px;
}

#todo-list {
  margin-top: 10px;
}
</style>