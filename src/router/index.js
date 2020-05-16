import Vue from "vue";
import VueRouter from "vue-router";
import ToDoList from "@/components/ToDoList.vue";
import Login from "@/components/Login.vue";

Vue.use(VueRouter);

const routes = [
  {
    component: ToDoList,
    name: "ToDoList",
    path: "/",
  },
  {
    component: Login,
    name: "Login",
    path: "/login",
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
