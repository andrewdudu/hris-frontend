import config from '@/config';
import axios from 'axios';

export default {
	postRequestLeave(data) {
		return axios.post(config.api.request.leave, data);
	},
	getExtendLeave() {
		return axios.get(config.api.request.extend);
	},
	postExtendLeave(data) {
		return axios.post(config.api.request.extend, data);
	}
}
