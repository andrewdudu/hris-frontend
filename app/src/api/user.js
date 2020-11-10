import config from '@/config';
import axios from 'axios';

export default {
	fetchCurrentUser() {
		return axios.get(config.api.user.current);
	},
	fetchCurrentUserSummary() {
		return axios.get(config.api.user.currentSummary);
	},
	fetchUserProfile(id) {
		return axios.get(config.api.user.profile(id));
	},
	fetchLeaveQuotas(id) {
		return axios.get(config.api.user.leaveQuotas(id));
	}
}
