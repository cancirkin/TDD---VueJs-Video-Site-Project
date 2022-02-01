import VueRouter from "vue-router";
import Vue from "vue";
import Home from "../views/Home.vue";
import Favorites from "../views/Favorites.vue";
import Watch from "../views/Watch";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", component: Home },
    { path: "/favorites", component: Favorites },
    { path: "/watch", component: Watch },
  ],
});

export default router;
