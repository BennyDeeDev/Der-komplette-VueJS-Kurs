import Vue from "vue";
import Vuex from "vuex";
import ToDoService from "@/services/ToDoService";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        todos: [],
        counter: 4,
        searchQuery: "",
    },
    mutations: {
        ADD_TODO(state, title) {
            state.todos.push({ id: state.counter++, title });
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
    },
    actions: {
        fetchToDos({ commit }) {
            ToDoService.getToDos()
                .then(({ data }) => commit("SET_TODOS", data))
                .catch((error) => console.log(error));
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
    },
});
