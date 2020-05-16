import Vue from "vue";
import VueRouter from "vue-router";
import ToDoList from "@/views/ToDoList.vue";
import Login from "@/views/Login.vue";
import ToDoDetails from "@/views/ToDoDetails.vue";

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
    name: "ToDoDetails",
    component: ToDoDetails,
    props: true,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
