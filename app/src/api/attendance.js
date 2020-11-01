import axios from 'axios';
import config from '@/config';

export default {
	postClockIn() {
		return axios.post(config.api.attendance.clockIn);
	}
}
