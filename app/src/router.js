import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const HomePage = () => import(/* webpackChunkName:'p-home' */"@/views/Home.vue");
const AnnouncementPage = () => import(/* webpackChunkName:'p-announcement' */"@/views/Announcement.vue");
const LoginPage = () => import("@/views/Login.vue");
const ProfilePage = () => import("@/views/Profile.vue");
const ProfileReportPage = () => import("@/views/ProfileReport.vue");
const RequestPage = () => import("@/views/Request.vue");
const SpecialLeaveListPage = () => import("@/views/request/SpecialLeaveList.vue");
const RequestLeavePage = () => import("@/views/request/RequestLeave.vue");
const ExtendLeavePage = () => import("@/views/request/ExtendLeave.vue");
const RequestAttendancePage = () => import("@/views/request/Attendance.vue");
const AttendancePage = () => import("@/views/Attendance.vue");
const ReportPage = () => import("@/views/Report.vue");
const IncomingRequestPage = () => import("@/views/IncomingRequests.vue");
const CalendarPage = () => import("@/views/Calendar.vue");
const DepartmentPage = () => import("@/views/employee/EmployeeList.vue");
const EmployeePage = () => import("@/views/employee/Employee.vue");
const EmployeeDetailPage = () => import("@/views/employee/EmployeeDetail.vue");
const AddAnnouncementPage = () => import("@/views/AddAnnouncement.vue");

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
    },
    {
      path: "/request",
      name: "request page",
      component: RequestPage
    },
    {
      path: "/request/special",
      name: "special request list",
      component: SpecialLeaveListPage
    },
    {
      path: "/request/leave",
      name: "Request Leave",
      component: RequestLeavePage
    },
    {
      path: "/request/extend",
      name: "Extend Leave",
      component: ExtendLeavePage
    },
    {
      path: "/request/attendance",
      name: "Request Attendance",
      component: RequestAttendancePage
    },
    {
      path: "/attendance",
      name: "Attendance Page",
      component: AttendancePage
    },
    {
      path: "/report",
      name: "Report Page",
      component: ReportPage
    },
    {
      path: "/request/incoming",
      name: "Incoming Page",
      component: IncomingRequestPage
    },
    {
      path: "/calendar",
      name: "Calendar Page",
      component: CalendarPage
    },
    {
      path: "/department",
      name: "Department Page",
      component: DepartmentPage
    },
    {
      path: "/employee",
      name: "Employee Page",
      component: EmployeePage
    },
    {
      path: "/employee/detail",
      name: "Employee Detail Page",
      component: EmployeeDetailPage
    },
    {
      path: "/add-announcement",
      name: "Add Announcement Page",
      component: AddAnnouncementPage
    }
  ],
});
