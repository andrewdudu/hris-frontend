import api from '@/api/dashboard';

const state = {
	dashboardSummary: null
};

const mutations = {
	setDashboardSummary(state, dashboardSummary) {
		state.dashboardSummary = dashboardSummary;
	}
};

const actions = {
	fetchDashboardSummary({ commit }) {
		return api.fetchDashboardSummary()
			.then(summary => {
				commit('setDashboardSummary', summary.data.data);
				return summary;
			})
	}
};

const getters = {
	dashboardSummary(state) {
		return state.dashboardSummary || null;
	}
};

export default {
	namespaced: true,
	state,
	mutations,
	actions,
	getters
}
