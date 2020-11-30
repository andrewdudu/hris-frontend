import axios from './axios';
import config from '@/config';

export default {
	fetchAnnouncements() {
		return axios.get(config.api.announcement);
	}
}
