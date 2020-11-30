import axios from "axios";
import router from "@/router.js";

const ajax = axios.create({
	withCredentials: true
});

ajax.interceptors.response.use(
	(response) => {
		return response;
	},
	(error) => {
		// if it isn't 401 then ignore
		if (error.response.status !== 401 && error.response.status !== 403) {
			return new Promise((_resolve, reject) => {
				reject(error);
			});
		}

		// if it is already refreshed but still 401, then ignore and redirect to login page
		if (error.response.status === 403 || error.response.status === 401) {
			return new Promise((_resolve, reject) => {
				router.push('/login');
				reject(error);
			});
		}

		return new Promise((_resolve, reject) => {
			reject(error);
		})
	}
);

export default ajax;
