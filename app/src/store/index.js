import Vue from 'vue'
import Vuex from 'vuex'
import userApi from '@/api/user';
import dashboardApi from '@/api/dashboard';
import attendanceApi from '@/api/attendance';
import announcementApi from '@/api/announcement';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
      currentUser: null,
      dashboardSummary: null,
      announcements: []
  },
  mutations: {
    setCurrentUser (state, posts) {
      state.currentUser = posts
    },
    setDashboardSummary(state, dashboardSummary) {
      state.dashboardSummary = dashboardSummary;
    },
    setAnnouncements(state, announcements) {
      state.announcements = announcements;
    }
  },
  actions: {
      fetchCurrentUser({ commit }) {
          return userApi.fetchCurrentUser()
              .then(user => {
                  commit('setCurrentUser', user.data.data);
                  return user;
              })
      },
      fetchDashboardSummary({ commit }) {
          return dashboardApi.fetchDashboardSummary()
              .then(summary => {
                  commit('setDashboardSummary', summary.data.data);
                  return summary;
              })
      },
      fetchAnnouncements({ commit }) {
          return announcementApi
              .fetchAnnouncements()
              .then(announcements => {
                  commit('setAnnouncements', announcements.data.data);
                  return announcements;
              })
    },
      // eslint-disable-next-line no-unused-vars
        postClockIn({ commit }, request) {
        return attendanceApi
            .postClockIn(request)
            .then(response => response)
    }
  },
  modules: {
  }
})
