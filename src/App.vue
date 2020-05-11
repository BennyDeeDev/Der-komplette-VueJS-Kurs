<template>
  <div>
    <div v-bind:style="{color: activeColor}" v-if="showMessage">{{ message }}</div>
    <div v-for="(todo,index) in todos" :key="index">{{ todo.text }}</div>
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
  }
};
</script>

<style>
</style>