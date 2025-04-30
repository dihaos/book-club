import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import MyBooksView from "../views/MyBooksView.vue";

const routes = [
  { path: "/", name: "home", component: HomeView },
  { path: "/my-books", name: "my-books", component: MyBooksView }, // добавляем новый маршрут
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
