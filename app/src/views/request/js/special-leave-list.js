import color from "@/assets/js/color.js";
import { mapActions, mapGetters } from "vuex";
import { lowerCase } from 'lodash';
import config  from '@/config';

export default {
	name: "special-leave-list",
	data() {
		return {
			color,
			requestRoute: config.requestRoute
		};
	},
	methods: {
		...mapActions('user', ['fetchAvailableSpecialRequests']),
		toLowerCase(str) {
			return lowerCase(str);
		}
	},
	computed: {
		...mapGetters('user', ['availableSpecialRequests']),
	},
	created() {
		this.fetchAvailableSpecialRequests();
	}
};
