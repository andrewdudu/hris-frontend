import color from "@/assets/js/color.js";
import { mapActions, mapGetters } from "vuex";
import timestamp from '@/utils/timestamp';

export default {
	name: "Login",
	data() {
		return {
			color
		};
	},
	methods: {
		...mapActions('user', ['fetchLeaveQuotas']),
		unixToString(unix) {
			return timestamp.unixToString(unix);
		}
	},
	computed: {
		...mapGetters('user', ['currentUser', 'leaveQuotas']),
		annual() {
			if (this.leaveQuotas !== null) {
				return this.leaveQuotas.find(val => val.type === 'annual');
			}
			return {};
		},
		extra() {
			if (this.leaveQuotas !== null) {
				return this.leaveQuotas.find(val => val.type === 'extra');
			}
			return {};
		},
		substitute() {
			if (this.leaveQuotas !== null) {
				return this.leaveQuotas.find(val => val.type === 'substitute');
			}
			return {};
		}
	},
	created() {
		this.fetchLeaveQuotas(this.currentUser.username);
	}
};
