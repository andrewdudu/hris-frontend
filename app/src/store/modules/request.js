import api from '@/api/request';

const state = {
	extendLeave: null,
	incomingRequests: [],
	excelReport: []
};

const mutations = {
	setExtendLeave(state, extendLeave) {
		state.extendLeave = extendLeave;
	},
	setExtendLeaveResponse(state, extendLeaveResponse) {
		if (state.extendLeave !== null) {
			state.extendLeave.status = extendLeaveResponse.status;
		}
	},
	setIncomingRequests(state, requests) {
		state.incomingRequests = requests;
	},
	setExcelReport(state, requests) {
		state.excelReport = requests;
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
	},
	// eslint-disable-next-line no-unused-vars
	postRequestAttendance({ commit }, data) {
		return api.postRequestAttendance(data)
			.then(res => {
				return res;
			});
	},
	fetchIncomingRequests({ commit }, data) {
		return api.fetchIncomingRequest(data)
			.then(res => {
				commit('setIncomingRequests', res.data.data);
				return res;
			})
	},
	// eslint-disable-next-line no-unused-vars
	postApprove({ commit }, data) {
		return api.postApprove(data)
			.then(res => {
				return res;
			})
	},
	// eslint-disable-next-line no-unused-vars
	postReject({ commit }, data) {
		return api.postReject(data)
			.then(res => {
				return res;
			})
	},
	fetchExcelReport({ commit }, params) {
		return api.fetchExcelReport(params)
			.then(res => {
				commit('setExcelReport', res.data.data);
				return res;
			});
	},
	// eslint-disable-next-line no-unused-vars
	postAddSubstituteLeave({ commit }, data) {
		return api.postAddSubstituteLeave(data)
			.then(res => {
				return res;
			})
	},
	// eslint-disable-next-line no-unused-vars
	postHourlyLeave({ commit }, data) {
		return api.postHourlyLeave(data)
			.then(res => {
				return res;
			});
	}
};

const getters = {
	extendLeave(state) {
		return state.extendLeave || null;
	},
	incomingRequests(state) {
		return state.incomingRequests || null;
	},
	excelReport(state) {
		return state.excelReport || null;
	}
};

export default {
	namespaced: true,
	state,
	mutations,
	actions,
	getters
}
