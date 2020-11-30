import color from "@/assets/js/color.js";
import timestamp from "@/utils/timestamp";
import { mapActions, mapGetters } from "vuex";
import moment from 'moment';

export default {
	name: "Announcement",
	data() {
		return {
			color,
			month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
			thisMonth: moment().format('M') - 1,
			startUnix: moment().startOf('week').toString(),
			endUnix: moment().endOf('week').toString()
		};
	},
	methods: {
		...mapActions('attendance', [
			'fetchAttendances'
		]),
		...mapActions('calendar', ['fetchCalendarDay']),
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
				month: this.month[this.thisMonth],
				year: moment().format('YYYY')
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
		this.fetchAttendances({
			startDate: this.startUnix,
			endDate: this.endUnix
		});
		this.fetchCalendarDay();
	}
};
