import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import FavoritesView from "@/views/FavoritesView.vue";
import HomePage from "@/components/HomePage/HomePage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomePage,
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
