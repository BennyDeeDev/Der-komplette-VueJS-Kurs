<template>
  <div>
    <input @change="addToDo" />
    <div v-for="(todo,index) in todos" :key="index">{{ todo.text }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todos: [
        { text: "HTML & CSS lernen" },
        { text: "JavaScript lernen" },
        { text: "Vue lernen" }
      ]
    };
  },
  methods: {
    addToDo(e) {
      this.todos.push({ text: e.target.value });
    }
  }
};
</script>

<style>
</style>