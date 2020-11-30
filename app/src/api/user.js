import config from '@/config';
import axios from './axios';

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
	},
	fetchAvailableRequests() {
		return axios.get(config.api.user.availableRequests);
	},
	fetchAvailableSpecialRequests() {
		return axios.get(config.api.user.availableSpecialRequests);
	},
	fetchAttendanceSummary() {
		return axios.get(config.api.user.attendanceSummary);
	}
}
