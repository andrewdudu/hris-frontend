import config from '@/config';
import axios from 'axios';

export default {
	postRequestLeave(data) {
		console.log(data);
		return axios.post(config.api.request.leave, data);
	}
}
