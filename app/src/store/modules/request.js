import api from '@/api/request';

const state = {
	extendLeave: null,
};

const mutations = {
	setExtendLeave(state, extendLeave) {
		state.extendLeave = extendLeave;
	},
	setExtendLeaveResponse(state, extendLeaveResponse) {
		if (state.extendLeave !== null) {
			state.extendLeave.status = extendLeaveResponse.status;
		}
	}
};

const actions = {
	// eslint-disable-next-line no-unused-vars
	postRequestLeave({ commit }, data) {
		return api.postRequestLeave(data)
			.then(res => {
				return res;
			})
	},
	getExtendLeave({ commit }) {
		return api.getExtendLeave()
			.then(res => {
				commit('setExtendLeave', res.data.data);
				return res;
			})
	},
	// eslint-disable-next-line no-unused-vars
	postExtendLeave({ commit }, data) {
		return api.postExtendLeave(data)
			.then(res => {
				commit('setExtendLeaveResponse', res.data.data);
				return res;
			})
	}
};

const getters = {
	extendLeave(state) {
		return state.extendLeave || null;
	}
};

export default {
	namespaced: true,
	state,
	mutations,
	actions,
	getters
}
