import api from '@/api/user';

const state = {
	currentUser: null,
	currentUserSummary: null,
	userProfile: null,
	leaveQuotas: null,
	availableRequests: null,
	availableSpecialRequests: null,
	attendanceSummary: null
};

const mutations = {
	setCurrentUser (state, data) {
		state.currentUser = data
	},
	setCurrentUserSummary (state, data) {
		state.currentUserSummary = data
	},
	setUserProfile(state, data) {
		state.userProfile = data;
	},
	setLeaveQuotas(state, data) {
		state.leaveQuotas = data;
	},
	setAvailableRequests(state, data) {
		state.availableRequests = data;
	},
	setAvailableSpecialRequests(state, data) {
		state.availableSpecialRequests = data;
	},
	setAttendanceSummary(state, data) {
		state.attendanceSummary = data;
	}
};

const actions = {
	fetchCurrentUser({ commit }) {
		return api.fetchCurrentUser()
			.then(user => {
				commit('setCurrentUser', user.data.data);
				return user;
			})
	},
	fetchCurrentUserSummary({ commit }) {
		return api.fetchCurrentUserSummary()
			.then(user => {
				commit('setCurrentUserSummary', user.data.data);
				return user;
			})
	},
	fetchUserProfile({ commit }, id) {
		return api.fetchUserProfile(id)
			.then(user => {
				commit('setUserProfile', user.data.data);
				return user;
			})
	},
	fetchLeaveQuotas({ commit }, id) {
		return api.fetchLeaveQuotas(id)
			.then(leave => {
				commit('setLeaveQuotas', leave.data.data);
				return leave;
			})
	},
	fetchAvailableRequests({ commit }) {
		return api.fetchAvailableRequests()
			.then(requests => {
				commit('setAvailableRequests', requests.data.data);
				return requests;
			})
	},
	fetchAvailableSpecialRequests({ commit }) {
		return api.fetchAvailableSpecialRequests()
			.then(requests => {
				commit('setAvailableSpecialRequests', requests.data.data);
				return requests;
			})
	},
	fetchAttendanceSummary({ commit }) {
		return api.fetchAttendanceSummary()
			.then(res => {
				commit('setAttendanceSummary', res.data.data);
				return res;
			})
	}
};

const getters = {
	currentUser(state) {
		return state.currentUser || {};
	},
	currentUserSummary(state) {
		return state.currentUserSummary || null;
	},
	userProfile(state) {
		return state.userProfile || null;
	},
	leaveQuotas(state) {
		return state.leaveQuotas || null;
	},
	availableRequests(state) {
		return state.availableRequests || null;
	},
	availableSpecialRequests(state) {
		return state.availableSpecialRequests || null;
	},
	attendanceSummary(state) {
		return state.attendanceSummary || null;
	}
};

export default {
	namespaced: true,
	state,
	mutations,
	actions,
	getters
}
