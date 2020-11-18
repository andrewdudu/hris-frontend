import api from '@/api/attendance';

const state = {
	attendances: []
};

const mutations = {
	setAttendance(state, attendances) {
		state.attendances = attendances;
	}
};

const actions = {
	// eslint-disable-next-line no-unused-vars
	postClockIn({ commit }, request) {
		return api
			.postClockIn(request)
			.then(response => response);
	},
	// eslint-disable-next-line no-unused-vars
	postClockOut({ commit }, request) {
		return api
			.postClockOut(request)
			.then(response => response);
	},
	fetchAttendances({ commit }, query) {
		return api.fetchAttendances(query)
			.then(res => {
				commit('setAttendance', res.data.data);
				return res;
			})
	}
};

const getters = {
	attendances(state) {
		return state.attendances || [];
	}
};

export default {
	namespaced: true,
	state,
	mutations,
	actions,
	getters
}
