import color from "@/assets/js/color.js";
import nameToInitials from "@/utils/name-to-initials";
import timestamp from "@/utils/timestamp";
import moment from 'moment';
import pdf from 'vue-pdf';
import { mapActions, mapGetters } from "vuex";
import _ from "lodash";

export default {
	name: "incoming-request",
	components: {
		pdf
	},
	data() {
		return {
			color,
			dialog: false,
			search: '',
			value: '',
			departments: [],
			breadcrumbsItems: [
				{
					text: 'Request',
					disabled: false,
					href: '/request',
				},
				{
					text: 'Incoming Request',
					disabled: true
				},
			],
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
		...mapActions('department', ['fetchDepartments']),
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
		},
		onFilterChange(val) {
			this.value = val;
			this.onChange();
		},
		onChange() {
			this.fetchIncomingRequests({
				name: this.search,
				department: this.value,
				type: 'REQUESTED'
			})
		},
		debounceInput: _.debounce(function() {
			this.onChange();
		}, 500)
	},
	computed: {
		...mapGetters('request', ['incomingRequests']),
		dates() {
			if (this.data.type === 'LEAVE') {
				this.data.detail.leave.dates.sort();

				return this.data.detail.leave.dates;
			}
			return null;
		},
	},
	watch: {
		search(val) {
			if (!val) return;

			this.debounceInput();
		}
	},
	created() {
		this.fetchIncomingRequests({
			type: 'REQUESTED'
		});
		this.fetchDepartments()
			.then(res => {
				this.departments = res.data.data.map(department => department.name)
			})
	}
};
