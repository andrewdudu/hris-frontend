import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

// USER PAGE
const HomePage = () => import("@/views/Home.vue");
const AnnouncementPage = () => import("@/views/Announcement.vue");
const LoginPage = () => import("@/views/Login.vue");
const ProfilePage = () => import("@/views/Profile.vue");
const ProfileReportPage = () => import("@/views/ProfileReport.vue");

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
    },
    {
      path: "/login",
      name: "login",
      component: LoginPage
    },
    {
      path: "/profile",
      name: "profile",
      component: ProfilePage
    },
    {
      path: "/profile/report",
      name: "profile report",
      component: ProfileReportPage
    }
  ],
});
