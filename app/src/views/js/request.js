import color from "@/assets/js/color.js";
import { mapActions, mapGetters } from "vuex";
import { lowerCase } from 'lodash';
import config  from '@/config';

export default {
	name: "Requests",
	data() {
		return {
			color,
			requestRoute: config.requestRoute
		};
	},
	methods: {
		...mapActions('user', ['fetchAvailableRequests']),
		toLowerCase(str) {
			return lowerCase(str);
		}
	},
	computed: {
		...mapGetters('user', ['availableRequests']),
	},
	created() {
		this.fetchAvailableRequests();
	}
};
