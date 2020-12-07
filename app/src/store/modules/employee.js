import api from '@/api/employee';

const state = {
	employee: [],
	employeeDetail: null
};

const mutations = {
	setEmployee(state, data) {
		state.employee = data;
	},
	setEmployeeDetail(state, data) {
		state.employeeDetail = data;
	}
};

const actions = {
	fetchEmployees({ commit }, param) {
		return api.fetchEmployees(param)
			.then(res => {
				commit('setEmployee', res.data.data);
				return res;
			})
	},
	fetchEmployeeDetail({ commit }, id) {
		return api.fetchEmployeeDetail(id)
			.then(res => {
				commit('setEmployeeDetail', res.data.data);
				return res;
			})
	}
};

const getters = {
	employee(state) {
		return state.employee || null;
	},
	employeeDetail(state) {
		return state.employeeDetail || null;
	}
};

export default {
	namespaced: true,
	state,
	mutations,
	actions,
	getters
}
