import axios from 'axios';
import config from '@/config';

export default {
	postLogin() {
		return axios.post(config.api.authentication.login);
	}
}
