const state = {
	snackbar: {
		color: "success",
		isShown: false,
		message: "",
	}
};

const mutations = {
	setSnackbar(state, snackbar) {
		state.snackbar = snackbar;
	}
};

const actions = {
	openSnackbar({ commit }, data) {
		commit('setSnackbar', {
			color: data.color,
			message: data.message,
			isShown: true
		});
	},
	hideSnackbar({ state, commit }) {
		commit('setSnackbar', {
			color: state.snackbar.color,
			message: state.snackbar.message,
			isShown: false
		});
	}
};

const getters = {
	snackbar(state) {
		return state.snackbar || [];
	}
};

export default {
	namespaced: true,
	state,
	mutations,
	actions,
	getters
}
