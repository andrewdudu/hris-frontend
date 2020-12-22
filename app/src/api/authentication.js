import axios from './axios';
import config from '@/config';

export default {
	postLogin(request) {
		return axios.post(config.api.authentication.login, request);
	},
	postLogout() {
		return axios.post(config.api.authentication.logout);
	}
}
