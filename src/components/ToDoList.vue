<template>
  <div>
    <input v-model="message" />
    <div v-for="(todo,index) in todos" :key="index">{{ todo.text }}</div>
    <button v-on:click="addToDo">Hinzufügen</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
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