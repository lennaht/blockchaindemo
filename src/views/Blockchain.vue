<template>
  <div class="blockchain">
    <button @click="validate" class="btn btn-primary">
        <span v-if="validating" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
        {{ validating ? 'Verifizieren...' : 'Verifizieren'}}
    </button>
    <p>
        Blockchain Status: 
        <span :class="['badge', valid ? 'badge-success' : 'badge-danger']">
            {{ valid ? 'Verifiziert' : 'Fehlerhaft' }}
        </span>
    </p>
    <br>
    <button @click="saveChanges" :disabled="!changes" class="btn btn-danger">Speichern</button>
    <button @click="reloadJSON" :disabled="!changes" class="btn btn-secondary">Verwerfen</button>
    <p v-if="!validJSON" id="validityWarning">Kein valides JSON</p>
    <prism-editor v-model="chainString" language="js"></prism-editor>
  </div>
</template>

<script>
import { chain } from '../main';

import ListAction from '../blockchain/ListAction';
import Block from '../blockchain/Block';

import PrismEditor from 'vue-prism-editor';

export default {
    name: 'Blockchain',
    components: {
        PrismEditor
    },
    data() {
        return {
            chainString: '',
            valid: true,
            validating: false,
            validJSON: true,
            changes: false
        };
    },
    methods: {
        async validate() {
            this.validating = true;

            const valid = await chain.validateChain();
            this.valid = valid;

            this.validating = false;
        },
        reloadJSON() {
            this.chainString = JSON.stringify(chain.chain, undefined, 2);
        },
        async saveChanges() {
            const newChain = JSON.parse(this.chainString);
            if(chain.length < newChain.length) { // Chain verlängern, wenn Blöcke hinzugefügt werden
                for(let i=0; i < (chain.length - newChain.length); i++) {
                    const newBlock = new Block;
                    chain.chain.push(newBlock);
                }
            }
            if(chain.length > newChain.length) { // Chain kürzen, wenn Blöcke gelöscht wurden                            
                for(let i=0; i < (chain.length - newChain.length); i++) {                    
                    chain.chain.pop();
                }                
            }
            for(let i=0; i < newChain.length; i++) {
                if(JSON.stringify(newChain[i]) !== JSON.stringify(chain.chain[i])) {
                    if(Array.isArray(newChain[i].body)) {
                        newChain[i].body = newChain[i].body.map(item => { // ListActions replizieren
                            if(item.action) {
                                return new ListAction(item.action, item.id, item.timestamp, item.text);
                            } else return item;
                        });
                    }
                    chain.chain[i].assign(newChain[i]); // Änderungen auf Chain übertragen
                }
            }
            this.reloadJSON();
            await this.validate();
        },
        validateJSON(string) {
            try {
                JSON.parse(string);
            } catch (error) {
                return false
            }
            return true;
        }
    },
    watch: {
        chainString(newString, oldString) {
            this.validJSON = this.validateJSON(newString);
            this.changes = this.chainString !== JSON.stringify(chain.chain, undefined, 2);
        }
    },
    created() {
        this.reloadJSON();
        this.validate();
    }
}
</script>
<style scoped>
.blockchain {
    margin-top: 10px;
}
</style>