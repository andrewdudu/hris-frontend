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
	fetchAnnouncements({ commit }) {
		return api
			.fetchAnnouncements()
			.then(announcements => {
				commit('setAnnouncements', announcements.data.data);
				return announcements;
			})
	},
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
