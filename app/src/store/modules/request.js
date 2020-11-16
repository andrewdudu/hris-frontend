import api from '@/api/request';

const state = {};

const mutations = {};

const actions = {
	// eslint-disable-next-line no-unused-vars
	postRequestLeave({ commit }, data) {
		return api.postRequestLeave(data)
			.then(res => {
				return res;
			})
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
