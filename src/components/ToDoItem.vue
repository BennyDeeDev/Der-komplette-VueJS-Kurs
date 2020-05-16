<template>
  <div>
    <input type="checkbox" v-model="todo.done" />
    {{ todo.title }}
    <button v-on:click="deleteToDo(todo.id)">X</button>
  </div>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true
    }
  }
};
</script>

<style>
</style>