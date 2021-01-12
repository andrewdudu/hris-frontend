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
			url: null,
			startHour: null,
			endHour: null,
			menuStartHour: false,
			menuEndHour: false,
			startHourRules: [(v) => !!v || "Clock In is required"],
			endHourRules: [(v) => !!v || "Clock Out is required"],
			breadcrumbsItems: [
				{
					text: 'Request',
					disabled: false,
					href: '/request',
				},
				{
					text: 'Request Attendance',
					disabled: true,
					href: 'calendar',
				},
			],
		};
	},
	methods: {
		...mapActions('request', ['postRequestAttendance']),
		...mapActions('component', ['openSnackbar']),
		onRequest() {
			this.postRequestAttendance({
				date: this.date,
				clockIn: this.startHour,
				clockOut: this.endHour,
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
			return this.date !== null && (this.startHour !== null && this.startHour !== '') && (this.endHour !== null && this.endHour !== '');
		}
	},
};
