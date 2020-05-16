import Vue from "vue";
import Vuex from "vuex";
import ToDoService from "@/services/ToDoService";

Vue.use(Vuex);

export default {
    state: {
        todos: [],
        counter: 4,
        searchQuery: "",
    },
    mutations: {
        ADD_TODO(state, todo) {
            state.todos.push({ id: todo.id, title: todo.title, done: todo.done });
        },
        DELETE_TODO(state, id) {
            state.todos.splice(
                state.todos.findIndex((item) => item.id === id),
                1
            );
        },
        SET_TODOS(state, data) {
            state.todos = data;
        },
        TOGGLE_DONE(state, { id, done }) {
            state.todos[state.todos.findIndex((todo) => Number(id) === todo.id)].done = done;
        },
    },
    actions: {
        fetchToDos({ commit }) {
            ToDoService.getToDos()
                .then(({ data }) => commit("SET_TODOS", data))
                .catch((error) => console.log(error));
        },
        addToDo({ commit }, todo) {
            ToDoService.addToDo(todo)
                .then(({ data }) => commit("ADD_TODO", data))
                .catch((error) => console.log(error));
        },
        deleteToDo({ commit }, id) {
            ToDoService.deleteToDo(id)
                .then(() => {
                    commit("DELETE_TODO", id);
                })
                .catch((Error) => console.log(Error));
        },
        doneToDo({ commit, getters }, id) {
            ToDoService.doneToDo({ id, done: getters.getToDoById(id).done })
                .then(({ data }) => {
                    console.log(data);
                    commit("TOGGLE_DONE", data);
                })
                .catch((Error) => console.log(Error));
        },
    },
    getters: {
        activeToDos: (state) => {
            return state.todos.filter((item) => !item.done);
        },
        doneToDos: (state) => {
            return state.todos.filter((item) => item.done);
        },
        filterToDos: (state) => {
            return state.todos.filter((item) => item.title.toLowerCase().startsWith(state.searchQuery.toLowerCase()));
        },
        getToDoById: (state) => (id) => {
            return state.todos.find((todo) => id === todo.id);
        },
    },
};
