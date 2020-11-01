import config from '@/config';
import axios from 'axios';

export default {
	fetchCurrentUser() {
		return axios.get(config.api.user.current);
	}
}
