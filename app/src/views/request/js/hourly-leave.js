import color from "@/assets/js/color.js";
import { mapActions } from "vuex";
import config from '@/config';

export default {
	name: "request-leave",
	data() {
		return {
			color,
			config,
			date: null,
			menu: false,
			modal: false,
			note: '',
			startHour: null,
			endHour: null,
			menuStartHour: false,
			menuEndHour: false,
			startHourRules: [(v) => !!v || "Start time is required"],
			endHourRules: [(v) => !!v || "End time is required"],
			breadcrumbsItems: [
				{
					text: 'Request',
					disabled: false,
					href: '/request',
				},
				{
					text: 'Request Hourly Leave',
					disabled: true,
					href: 'calendar',
				},
			],
		};
	},
	methods: {
		...mapActions('request', ['postHourlyLeave']),
		...mapActions('component', ['openSnackbar']),
		onRequest() {
			this.postHourlyLeave({
				startTime: this.startHour,
				endTime: this.endHour,
				notes: this.note
			}).then(() => {
				this.openSnackbar({
					message: 'Request Successfully',
					color: 'success'
				});
				this.$router.push('/');
			}).catch((err) => {
				const errors = err.response.data.errors;
				let message = 'Something went wrong, please try again later.';
				let key = Object.keys(errors)[0];
				if (err.response.data.code === 400) {
					message = config.errMessage[errors[key]];
				}

				this.openSnackbar({
					message,
					color: 'error'
				});
			})
		}
	},
	computed: {
		valid() {
			return (this.startHour !== null && this.startHour !== '') && (this.endHour !== null && this.endHour !== '') && (this.note !== '' && this.note !== null);
		}
	},
};
