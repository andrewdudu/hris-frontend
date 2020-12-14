import api from '@/api/calendar';

const state = {
	calendarDay: null
};

const mutations = {
	setCalendarDay(state, calendarDay) {
		state.calendarDay = calendarDay;
	}
};

const actions = {
	fetchCalendarDay({ commit }, params) {
		return api.fetchCalendarDay(params)
			.then(res => {
				commit('setCalendarDay', res.data.data);
				return res;
			})
	},
	// eslint-disable-next-line no-unused-vars
	postSetHoliday({ commit }, data) {
		return api.postSetHoliday(data)
			.then(res => {
				return res;
			})
	}
};

const getters = {
	calendarDay(state) {
		return state.calendarDay || null;
	}
};

export default {
	namespaced: true,
	state,
	mutations,
	actions,
	getters
}
