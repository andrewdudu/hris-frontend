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
			}).catch(() => {
				this.openSnackbar({
					message: 'Something went wrong, please try again later.',
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
