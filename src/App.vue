<template>
  <div>
    <div v-bind:style="{color: activeColor}" v-if="showMessage">{{ message }}</div>
    <div v-for="(todo,index) in todos" :key="index">{{ todo.text }}</div>
    <button v-on:click="addToDo">Hinzufügen</button>
    <input v-model="message" />
    <button v-on:click="resetToDo">RESET</button>
  </div>
</template>

<script>
//https://stackoverflow.com/questions/42260233/vue-js-difference-between-v-model-and-v-bind
export default {
  data() {
    return {
      message: "Hello Vue!",
      activeColor: "green",
      showMessage: true,
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
    },
    resetToDo() {
      this.todos = [];
    }
  }
};
</script>

<style>
</style>