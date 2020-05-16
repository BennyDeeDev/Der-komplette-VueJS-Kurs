<template>
  <div>
    <input @change="addToDo" />
    <div v-for="(todo,index) in todos" :key="index">
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
  }
};
</script>

<style>
</style>