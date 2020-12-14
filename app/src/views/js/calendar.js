import color from "@/assets/js/color.js";
import timestamp from "@/utils/timestamp";
import { mapActions, mapGetters } from "vuex";
import moment from 'moment';

export default {
	name: "Announcement",
	data() {
		return {
			color,
			dialog: false,
			date: null,
			valid: false,
			title: '',
			notes: '',
			month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
			thisMonth: moment().format('M') - 1,
			startUnix: moment().startOf('month').toString(),
			endUnix: moment().endOf('month').toString(),
			notesRules: [
				v => !!v || 'Note is required',
				v => v.length <= 256 || 'Name must be less or equal than 256 characters'
			],
			titleRules: [
				v => !!v || 'Title is required',
			]
		};
	},
	methods: {
		...mapActions('attendance', [
			'fetchAttendances'
		]),
		...mapActions('calendar', ['fetchCalendarDay', 'postSetHoliday']),
		...mapActions('component', ['openSnackbar']),
		unixToShortDay(value) {
			return timestamp.unixToShortDay(value);
		},
		unixToString(value) {
			return timestamp.unixToString(value);
		},
		unixToTime(value) {
			return timestamp.unixToTime(value);
		},
		isPassed(calendar) {
			return moment().unix()*1000 < calendar.date;
		},
		onFilterChange(value) {
			this.thisMonth = this.month.indexOf(value);
			this.fetchCalendarDay({
				month: this.thisMonth + 1,
				year: moment().format('YYYY')
			})
		},
		onSetHoliday(date) {
			this.dialog = true;
			this.date = date;
		},
		onSubmit() {
			this.postSetHoliday({
				date: moment(this.date).format("YYYY-MM-DD"),
				name: this.title,
				notes: this.notes,
				status: 'HOLIDAY'
			}).then(() => {
				this.dialog = false;
				this.openSnackbar({
					message: 'Success',
					color: 'success'
				})
			}).catch(() => {
				this.openSnackbar({
					message: 'Something went wrong, please try again later.',
					color: 'error'
				})
			})
		}
	},
	computed: {
		...mapGetters('attendance', ['attendances']),
		...mapGetters('calendar', ['calendarDay']),
		value() {
			return this.month[this.thisMonth];
		}
	},
	created() {
		this.fetchCalendarDay({
			month: this.thisMonth + 1,
			year: moment().format('YYYY')
		});
	}
};
