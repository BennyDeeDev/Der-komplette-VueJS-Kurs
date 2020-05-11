<template>
  <div>
    <div v-bind:style="{color: activeColor}" v-if="showMessage">{{ message }}</div>
    <div v-for="(todo,index) in todos" :key="index">{{ todo.text }}</div>
    <button v-on:click="addToDo">Hinzufügen</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "Hello Vue!",
      activeColor: "green",
      showMessage: false,
      todos: [
        { text: "HTML lernen" },
        { text: "JavaScript lernen" },
        { text: "Vue lernen" }
      ]
    };
  },
  methods: {
    addToDo() {
      this.todos.push({ text: "Eine geile ToDo App bauen" });
    }
  }
};
</script>

<style>
</style>