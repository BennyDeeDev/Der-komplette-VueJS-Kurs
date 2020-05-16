<template>
    <div>
        <h1>To-Do Details</h1>
        <h2>To-Do Title</h2>
        <input v-bind:value="todo.title" @keydown.enter="changeTitle" />
    </div>
</template>

<script>
export default {
    methods: {
        changeTitle(e) {
            this.$store.dispatch("updateToDo", {
                id: Number(this.$attrs.id),
                title: e.target.value,
                done: false,
            });
        },
    },
    computed: {
        todo() {
            return this.$store.getters.getToDoById(Number(this.$attrs.id));
        },
    },
};
</script>

<style></style>
