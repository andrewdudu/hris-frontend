import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const HomePage = () => import(/* webpackChunkName:'p-home' */"@/views/Home.vue");
const AnnouncementPage = () => import(/* webpackChunkName:'p-announcement' */"@/views/Announcement.vue");
const LoginPage = () => import(/* webpackChunkName:'p-login' */"@/views/Login.vue");
const ProfilePage = () => import(/* webpackChunkName:'p-profile' */"@/views/Profile.vue");
const ProfileReportPage = () => import(/* webpackChunkName:'p-profile-report' */"@/views/ProfileReport.vue");
const RequestPage = () => import(/* webpackChunkName:'p-request-page' */"@/views/Request.vue");
const SpecialLeaveListPage = () => import(/* webpackChunkName:'p-special-leave' */"@/views/request/SpecialLeaveList.vue");
const RequestLeavePage = () => import(/* webpackChunkName:'p-request-leave' */"@/views/request/RequestLeave.vue");
const ExtendLeavePage = () => import(/* webpackChunkName:'p-extend-leave' */"@/views/request/ExtendLeave.vue");
const RequestAttendancePage = () => import(/* webpackChunkName:'p-attendance-request' */"@/views/request/Attendance.vue");
const AttendancePage = () => import(/* webpackChunkName:'p-attendance-page' */"@/views/Attendance.vue");
const ReportPage = () => import(/* webpackChunkName:'p-report' */"@/views/Report.vue");
const IncomingRequestPage = () => import(/* webpackChunkName:'p-incoming-request' */"@/views/IncomingRequests.vue");
const CalendarPage = () => import(/* webpackChunkName:'p-calendar' */"@/views/Calendar.vue");
const DepartmentPage = () => import(/* webpackChunkName:'p-department' */"@/views/employee/EmployeeList.vue");
const EmployeePage = () => import(/* webpackChunkName:'p-employee' */"@/views/employee/Employee.vue");
const EmployeeDetailPage = () => import(/* webpackChunkName:'p-employee-detail' */"@/views/employee/EmployeeDetail.vue");
const AddAnnouncementPage = () => import(/* webpackChunkName:'p-add-announcement' */"@/views/AddAnnouncement.vue");
const HourlyLeavePage = () => import(/* webpackChunkName:'p-hourly' */"@/views/request/HourlyLeave.vue");

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
      component: LoginPage,
    },
    {
      path: "/profile",
      name: "profile",
      component: ProfilePage,
    },
    {
      path: "/profile/report",
      name: "profile report",
      component: ProfileReportPage,
    },
    {
      path: "/request",
      name: "request page",
      component: RequestPage,
    },
    {
      path: "/request/special",
      name: "special request list",
      component: SpecialLeaveListPage,
    },
    {
      path: "/request/leave",
      name: "Request Leave",
      component: RequestLeavePage,
    },
    {
      path: "/request/extend",
      name: "Extend Leave",
      component: ExtendLeavePage,
    },
    {
      path: "/request/attendance",
      name: "Request Attendance",
      component: RequestAttendancePage,
    },
    {
      path: "/attendance",
      name: "Attendance Page",
      component: AttendancePage,
    },
    {
      path: "/report",
      name: "Report Page",
      component: ReportPage,
    },
    {
      path: "/request/incoming",
      name: "Incoming Page",
      component: IncomingRequestPage,
    },
    {
      path: "/calendar",
      name: "Calendar Page",
      component: CalendarPage,
    },
    {
      path: "/department",
      name: "Department Page",
      component: DepartmentPage,
    },
    {
      path: "/employee",
      name: "Employee Page",
      component: EmployeePage,
    },
    {
      path: "/employee/detail",
      name: "Employee Detail Page",
      component: EmployeeDetailPage,
    },
    {
      path: "/add-announcement",
      name: "Add Announcement Page",
      component: AddAnnouncementPage,
    },
    {
      path: "/request/hourly",
      name: "Hourly Leave Page",
      component: HourlyLeavePage,
    },
  ],
});
