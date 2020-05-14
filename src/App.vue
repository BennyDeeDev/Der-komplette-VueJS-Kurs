<template>
  <div>
    <ToDoList />
  </div>
</template>

<script>
import ToDoList from "@/components/ToDoList.vue";
//https://stackoverflow.com/questions/42260233/vue-js-difference-between-v-model-and-v-bind
export default {
  components: {
    ToDoList
  }
};
</script>

<style>
</style>