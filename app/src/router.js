import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

// USER PAGE
const HomePage = () => import("@/views/Home.vue");
const AnnouncementPage = () => import("@/views/Announcement.vue");

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/announcements",
      name: "announcements",
      component: AnnouncementPage,
    }
  ],
});
