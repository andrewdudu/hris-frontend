import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

// USER PAGE
const HomePage = () => import("@/views/Home.vue");

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
  ],
});
