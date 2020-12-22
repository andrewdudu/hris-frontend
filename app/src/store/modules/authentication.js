import api from '@/api/authentication';

const state = {
};

const mutations = {};

const actions = {
	// eslint-disable-next-line no-unused-vars
	postLogin({ commit }, request) {
		return api
			.postLogin(request)
			.then(response => response)
	},
	// eslint-disable-next-line no-unused-vars
	postLogout({ commit }) {
		return api
			.postLogout()
			.then(response => response);
	}
};

const getters = {};

export default {
	namespaced: true,
	state,
	mutations,
	actions,
	getters
}
