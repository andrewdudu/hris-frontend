import api from '@/api/announcement';

const state = {
	announcements: []
};

const mutations = {
	setAnnouncements(state, announcements) {
		state.announcements = announcements;
	}
};

const actions = {
	fetchAnnouncements({ commit }, params) {
		return api
			.fetchAnnouncements(params)
			.then(announcements => {
				commit('setAnnouncements', announcements.data.data);
				return announcements;
			})
	},
	// eslint-disable-next-line no-unused-vars
	postAnnouncement({ commit }, data) {
		return api
			.postAnnouncement(data)
			.then(announcement => {
				return announcement;
			})
	}
};

const getters = {
	announcements(state) {
		return state.announcements || [];
	}
};

export default {
	namespaced: true,
	state,
	mutations,
	actions,
	getters
}
