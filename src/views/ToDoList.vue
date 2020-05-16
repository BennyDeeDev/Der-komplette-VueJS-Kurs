<template>
    <div>
        <h2>Search To Dos</h2>
        <input v-model="$store.state.searchQuery" />
        <div v-if="$store.state.searchQuery">
            <ToDoItem v-for="todo in filteredToDos" :key="todo.id" v-bind:todo="todo" />
        </div>

        <h2>Add To Do</h2>
        <input @change="addToDo" />

        <h2>Active ToDos</h2>
        <ToDoItem v-for="todo in activeToDos" :key="todo.id" v-bind:todo="todo" />
        <h2>Done ToDos</h2>
        <ToDoItem v-for="todo in doneToDos" :key="todo.id" v-bind:todo="todo" />
    </div>
</template>

<script>
import ToDoItem from "@/components/ToDoItem.vue";
export default {
    components: {
        ToDoItem,
    },
    methods: {
        addToDo(e) {
            this.$store.dispatch("addToDo", { title: e.target.value, done: false });
        },
    },
    created() {
        this.$store.dispatch("fetchToDos");
    },
    computed: {
        activeToDos() {
            return this.$store.getters.activeToDos;
        },
        doneToDos() {
            return this.$store.getters.doneToDos;
        },
        filteredToDos() {
            return this.$store.getters.filterToDos;
        },
    },
};
</script>

<style></style>
