import axios from './axios';
import config from '@/config';

export default {
	fetchCalendarDay(query) {
		return axios.get(config.api.calendar.day, {
			params: query
		});
	},
	postSetHoliday(data) {
		return axios.post(config.api.calendar.setHoliday(data.date), {
			name: data.name,
			notes: data.notes,
			calendarStatus: data.calendarStatus
		});
	}
}
