import axios from './axios';
import config from '@/config';

export default {
	fetchEmployees() {
		return axios.get(config.api.employee.employees);
	},
	fetchEmployeeDetail(id) {
		return axios.get(config.api.employee.employeeDetail(id));
	}
}
