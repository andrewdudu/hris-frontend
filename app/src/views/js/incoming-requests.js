import color from "@/assets/js/color.js";
import nameToInitials from "@/utils/name-to-initials";
import timestamp from "@/utils/timestamp";
import moment from 'moment';
import pdf from 'vue-pdf';
import { mapActions, mapGetters } from "vuex";

export default {
	name: "incoming-request",
	components: {
		pdf
	},
	data() {
		return {
			color,
			dialog: false,
			data: {
					id: "1823a87f-12387321adf-123123adf",
					user: {
						name: "John Doe",
						department: "Technology",
						office: {
							name: "Sarana Jaya"
						}
					},
					status: "PENDING",
					type: "ATTENDANCE",
					detail: {
						attendance: {
							date: {
								start: 788781273,
								end: 788781273
							},
							notes: "notes"
						},
						leave: {
							dates: ["2020-09-25"],
							files: ["http://file.pdf", "http://file.webp"],
							notes: "notes",
							type: "SICK"
						},
						extend: {
							notes: "notes"
						}
					},
					date: 1590339600000
			},
			dialogTitle: 'Title'
		};
	},
	methods: {
		...mapActions('request', ['fetchIncomingRequests', 'postApprove', 'postReject']),
		...mapActions('component', ['openSnackbar']),
		nameToInitials(name) {
			return nameToInitials(name);
		},
		unixToDate(unix) {
			return moment(unix).format('DD MMM');
		},
		unixToFullDate(unix) {
			return moment(unix).format('DD MMMM YYYY');
		},
		unixToTime(value) {
			return timestamp.unixToTime(value);
		},
		onClick(data) {
			this.data = data;
			this.dialog = true;
		},
		onReject() {
			this.postReject(this.data.id)
				.then(() => {
					this.openSnackbar({
						color: 'success',
						message: 'Rejected.'
					})
				})
				.catch(() => {
					this.openSnackbar({
						color: 'error',
						message: 'Something went wrong.'
					})
				});
			this.dialog = false;
		},
		onApprove() {
			this.postApprove(this.data.id)
				.then(() => {
					this.openSnackbar({
						color: 'success',
						message: 'Approved.'
					})
				})
				.catch(() => {
					this.openSnackbar({
						color: 'error',
						message: 'Something went wrong.'
					})
				});
			this.dialog = false;
		}
	},
	computed: {
		...mapGetters('request', ['incomingRequests']),
		dates() {
			if (this.data.type === 'LEAVE') {
				this.data.detail.leave.dates.sort();

				return this.data.detail.leave.dates;
			}
			return null;
		}
	},
	created() {
		this.fetchIncomingRequests();
	}
};
