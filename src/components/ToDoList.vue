<template>
  <div>
    <input @change="addToDo" />

    <h2>Active ToDos</h2>
    <div v-for="todo in activeToDos" :key="todo.id">
      <input type="checkbox" v-model="todo.done" />
      {{ todo.text }}
      <button v-on:click="deleteToDo(todo.id)">X</button>
    </div>

    <h2>Done ToDos</h2>
    <div v-for="todo in doneToDos" :key="todo.id">
      <input type="checkbox" v-model="todo.done" />
      {{ todo.text }}
      <button v-on:click="deleteToDo(todo.id)">X</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todos: [
        { id: 1, text: "HTML & CSS lernen", done: true },
        { id: 2, text: "JavaScript lernen", done: true },
        { id: 3, text: "Vue lernen", done: false }
      ],
      counter: 4
    };
  },
  methods: {
    addToDo(e) {
      this.todos.push({ id: this.counter++, text: e.target.value });
    },
    deleteToDo(id) {
      this.todos.splice(
        this.todos.findIndex(item => item.id === id),
        1
      );
    }
  },
  computed: {
    activeToDos() {
      return this.todos.filter(item => !item.done);
    },
    doneToDos() {
      return this.todos.filter(item => item.done);
    }
  }
};
</script>

<style>
</style>