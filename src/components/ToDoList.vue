<template>
  <div>
    <h2>Search To Dos</h2>
    <input v-model="searchQuery" />
    <div v-if="searchQuery">
      <div v-for="todo in filterToDos" :key="todo.id">
        <input type="checkbox" v-model="todo.done" />
        {{ todo.title }}
        <button v-on:click="deleteToDo(todo.id)">X</button>
      </div>
    </div>

    <h2>Add To Do</h2>
    <input @change="addToDo" />

    <h2>Active ToDos</h2>
    <ToDoItem
      v-for="todo in activeToDos"
      :key="todo.id"
      v-bind:todo="todo"
      v-on:onDeleteToDo="deleteToDo"
    />
    <h2>Done ToDos</h2>
    <ToDoItem
      v-for="todo in doneToDos"
      :key="todo.id"
      v-bind:todo="todo"
      v-on:onDeleteToDo="deleteToDo"
    />
  </div>
</template>

<script>
import ToDoItem from "@/components/ToDoItem.vue";
export default {
  components: {
    ToDoItem
  },
  data() {
    return {
      todos: [
        { id: 1, title: "HTML & CSS lernen", done: true },
        { id: 2, title: "JavaScript lernen", done: true },
        { id: 3, title: "Vue lernen", done: false }
      ],
      counter: 4,
      searchQuery: ""
    };
  },
  methods: {
    addToDo(e) {
      this.todos.push({ id: this.counter++, title: e.target.value });
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
    },
    filterToDos() {
      return this.todos.filter(item =>
        item.title.toLowerCase().startsWith(this.searchQuery.toLowerCase())
      );
    }
  }
};
</script>

<style>
</style>