import axios from './axios';
import config from '@/config';

export default {
	postClockIn(body) {
		return axios.post(config.api.attendance.clockIn, body);
	},
	postClockOut(body) {
		return axios.post(config.api.attendance.clockOut, body);
	},
	fetchAttendances(query) {
		console.log(query);
		return axios.get(config.api.attendance.attendances, {
			params: query
		});
	}
}
