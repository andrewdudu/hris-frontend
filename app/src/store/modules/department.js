import api from '@/api/department';

const state = {
	departments: null
};

const mutations = {
	setDepartments(state, data) {
		state.departments = data;
	}
};

const actions = {
	fetchDepartments({ commit }) {
		return api.fetchDepartments()
			.then(res => {
				commit('setDepartments', res.data.data);
				return res;
			})
	}
};

const getters = {
	departments(state) {
		return state.departments || null;
	}
};

export default {
	namespaced: true,
	state,
	mutations,
	actions,
	getters
}
