import api from '@/api/user';

const state = {
	currentUser: null,
	currentUserSummary: null,
	userProfile: null,
	leaveQuotas: null
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
	}
};

const getters = {
	currentUser(state) {
		return state.currentUser || null;
	},
	currentUserSummary(state) {
		return state.currentUserSummary || null;
	},
	userProfile(state) {
		return state.userProfile || null;
	},
	leaveQuotas(state) {
		return state.leaveQuotas || null;
	}
};

export default {
	namespaced: true,
	state,
	mutations,
	actions,
	getters
}
