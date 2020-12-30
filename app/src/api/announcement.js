import axios from './axios';
import config from '@/config';

const defaultParams = {
	page: 0,
	size: 10
};

export default {
	fetchAnnouncements(params = defaultParams) {
		return axios.get(config.api.announcement.getAnnouncements, {
			params
		});
	},
	postAnnouncement(data) {
		return axios.post(config.api.announcement.addAnnouncement, data);
	}
}
