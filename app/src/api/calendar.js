import axios from './axios';
import config from '@/config';

export default {
	fetchCalendarDay(query) {
		return axios.get(config.api.calendar.day, {
			params: query
		});
	}
}
