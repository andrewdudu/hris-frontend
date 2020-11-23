import color from "@/assets/js/color.js";
import { mapActions } from "vuex";
import { lowerCase } from 'lodash';
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
			dateRules: [
				v => !!v || 'Date is required'
			],
			noteRules: [
				v => v.length <= 256 || 'Name must be less or equal than 256 characters'
			],
			startHourRules: [(v) => !!v || "Clock In is required"],
			endHourRules: [(v) => !!v || "Clock Out is required"]
		};
	},
	methods: {
		...mapActions('request', ['postRequestAttendance']),
		...mapActions('component', ['openSnackbar']),
		toLowerCase(str) {
			return lowerCase(str);
		},
		onRequest() {
			this.postRequestAttendance({
				date: this.date,
				clockIn: this.startHour,
				clockOut: this.endHour,
				notes: this.notes
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
