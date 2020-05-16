<template>
    <div>
        <input type="checkbox" v-model="todo.done" @change="doneToDo(todo.id)" />
        <router-link :to="{ name: 'ToDoDetails', params: { id: todo.id } }">{{ todo.title }}</router-link>
        <button v-on:click="handleDelete(todo.id)">X</button>
    </div>
</template>

<script>
export default {
    props: {
        todo: {
            type: Object,
            required: true,
        },
    },
    methods: {
        handleDelete(id) {
            this.$store.dispatch("deleteToDo", id);
        },
        doneToDo(id) {
            this.$store.dispatch("doneToDo", id);
        },
    },
};
</script>

<style></style>
