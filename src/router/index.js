import Vue from "vue";
import VueRouter from "vue-router";
import ToDoList from "@/components/ToDoList.vue";
import Login from "@/components/Login.vue";

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
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
