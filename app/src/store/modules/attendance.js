import api from '@/api/attendance';

const state = {
};

const mutations = {};

const actions = {
	// eslint-disable-next-line no-unused-vars
	postClockIn({ commit }, request) {
		return api
			.postClockIn(request)
			.then(response => response)
	},
	// eslint-disable-next-line no-unused-vars
	postClockOut({ commit }, request) {
		return api
			.postClockOut(request)
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
