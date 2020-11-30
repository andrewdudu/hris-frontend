import axios from './axios';
import config from '@/config';

export default {
	postClockIn() {
		return axios.post(config.api.attendance.clockIn);
	},
	postClockOut() {
		return axios.post(config.api.attendance.clockOut);
	},
	fetchAttendances(query) {
		return axios.get(config.api.attendance.attendances, {
			params: query
		});
	}
}
