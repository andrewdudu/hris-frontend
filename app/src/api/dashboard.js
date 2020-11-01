import axios from 'axios';
import config from '@/config';

export default {
	fetchDashboardSummary() {
		return axios.get(config.api.dashboard.summary);
	}
}
