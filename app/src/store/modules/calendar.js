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
	fetchCalendarDay({ commit }) {
		return api.fetchCalendarDay()
			.then(res => {
				commit('setCalendarDay', res.data.data);
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
