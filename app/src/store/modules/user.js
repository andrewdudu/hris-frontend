import api from '@/api/user';

const state = {
	currentUser: null
};

const mutations = {
	setCurrentUser (state, posts) {
		state.currentUser = posts
	}
};

const actions = {
	fetchCurrentUser({ commit }) {
		return api.fetchCurrentUser()
			.then(user => {
				commit('setCurrentUser', user.data.data);
				return user;
			})
	}
};

const getters = {
	currentUser(state) {
		return state.currentUser || null;
	}
};

export default {
	namespaced: true,
	state,
	mutations,
	actions,
	getters
}
