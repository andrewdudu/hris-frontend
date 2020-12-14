import axios from './axios';
import config from '@/config';

export default {
	fetchEmployees(params) {
		return axios.get(config.api.employee.employees, {
			params
		});
	},
	fetchEmployeeDetail(id) {
		return axios.get(config.api.employee.employeeDetail(id));
	}
}
