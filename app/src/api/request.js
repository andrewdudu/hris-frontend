import config from '@/config';
import axios from './axios';

export default {
	postRequestLeave(data) {
		return axios.post(config.api.request.leave, data);
	},
	getExtendLeave() {
		return axios.get(config.api.request.extend);
	},
	postExtendLeave(data) {
		return axios.post(config.api.request.extend, data);
	},
	postRequestAttendance(data) {
		return axios.post(config.api.request.attendance, data);
	},
	fetchIncomingRequest(params) {
		console.log(params);
		return axios.get(config.api.request.incoming, {
			params
		});
	},
	postApprove(id) {
		return axios.post(config.api.request.approve(id));
	},
	postReject(id) {
		return axios.post(config.api.request.reject(id));
	},
	fetchExcelReport(params) {
		return axios.get(config.api.request.excel, {
			params
		})
	}
}
