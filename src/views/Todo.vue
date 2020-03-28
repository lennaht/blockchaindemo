<template>
  <div class="home">
    <div class="container-fluid">
      <h3>ToDo-Liste</h3>
      <div class="input-group mb-3">
        <input type="text" v-model="taskInput" class="form-control" placeholder="Aufgabe" aria-label="Recipient's username" aria-describedby="button-addon2">
        <div class="input-group-append">
          <button class="btn btn-primary" type="button" id="button-addon2">Hinzufügen</button>
        </div>
      </div>
      <br>
      <ul class="list-group">
        <li class="list-group-item d-flex justify-content-between align-items-center">
          Cras justo odio
          <span class="badge badge-danger badge-pill delete-btn">X</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Todo',
  data() {
    return {
      taskInput: ''
    }
  },
}
</script>
<style scoped>
.delete-btn {
  cursor: pointer;
}
</style>