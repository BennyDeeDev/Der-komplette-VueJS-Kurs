<template>
  <div>
    <input type="checkbox" v-model="todo.done" />
    <router-link :to="{name: 'ToDoDetails', params: {id: todo.id} }">{{ todo.title }}</router-link>
    <button v-on:click="handleDelete(todo.id)">X</button>
  </div>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true
    }
  },
  methods: {
    handleDelete(id) {
      this.$store.commit("DELETE_TODO", id);
    }
  }
};
</script>

<style>
</style>