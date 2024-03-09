import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import FavoritesView from "@/views/FavoritesView.vue";
import HomeView from "@/views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/favorites",
    name: "favorites",
    component: FavoritesView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
