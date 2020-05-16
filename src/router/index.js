import Vue from "vue";
import VueRouter from "vue-router";
import ToDoList from "@/components/ToDoList.vue";
import Login from "@/components/Login.vue";
import ToDoItem from "@/components/ToDoItem.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "ToDoList",
    component: ToDoList,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/todo/:id",
    name: "TodoItem",
    component: ToDoItem,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
