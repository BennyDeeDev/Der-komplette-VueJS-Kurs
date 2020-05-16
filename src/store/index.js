import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [
      { id: 1, title: "HTML & CSS lernen", done: true },
      { id: 2, title: "JavaScript lernen", done: true },
      { id: 3, title: "Vue lernen", done: false },
    ],
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
  },
  actions: {},
  getters: {
    activeToDos: (state) => {
      return state.todos.filter((item) => !item.done);
    },
    doneToDos: (state) => {
      return state.todos.filter((item) => item.done);
    },
    filterToDos: (state) => {
      return state.todos.filter((item) =>
        item.title.toLowerCase().startsWith(state.searchQuery.toLowerCase())
      );
    },
  },
});
