import axios from './axios';
import config from '@/config';

export default {
	fetchDepartments(params) {
		return axios.get(config.api.departments, {
			params
		});
	}
}
