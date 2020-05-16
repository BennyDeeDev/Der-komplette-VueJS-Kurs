<template>
    <div>
        <h2>Search To Dos</h2>
        <input v-model="$store.state.searchQuery" />
        <div v-if="$store.state.searchQuery">
            <ToDoItem v-for="todo in getFilteredToDos" :key="todo.id" v-bind:todo="todo" />
        </div>

        <h2>Add To Do</h2>
        <input @change="addToDo" />

        <h2>Active ToDos</h2>
        <ToDoItem v-for="todo in getActiveToDos" :key="todo.id" v-bind:todo="todo" />
        <h2>Done ToDos</h2>
        <ToDoItem v-for="todo in getDoneToDos" :key="todo.id" v-bind:todo="todo" />
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
        getActiveToDos() {
            return this.$store.getters.activeToDos;
        },
        getDoneToDos() {
            return this.$store.getters.doneToDos;
        },
        getFilteredToDos() {
            return this.$store.getters.filterToDos;
        },
    },
};
</script>

<style></style>
