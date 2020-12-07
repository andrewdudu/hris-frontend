import color from "@/assets/js/color.js";
import timestamp from "@/utils/timestamp";
import { mapActions, mapGetters } from "vuex";
import moment from 'moment';

export default {
	name: "Announcement",
	data() {
		return {
			color,
			value: 'This Week',
			startUnix: moment().startOf('week').format('x').toString(),
			endUnix: moment().endOf('week').format('x').toString()
		};
	},
	methods: {
		...mapActions('attendance', [
			'fetchAttendances'
		]),
		unixToShortDay(value) {
			return timestamp.unixToShortDay(value);
		},
		unixToString(value) {
			return timestamp.unixToString(value);
		},
		unixToTime(value) {
			return timestamp.unixToTime(value);
		},
		onFilterChange(value) {
			this.value = value;
			this.startUnix = moment().startOf(this.value.split(' ').pop()).format('x').toString();
			this.endUnix = moment().endOf(this.value.split(' ').pop()).format('x').toString();
			this.fetchAttendances({
				startDate: this.startUnix,
				endDate: this.endUnix
			});
		}
	},
	computed: {
		...mapGetters('attendance', ['attendances'])
	},
	created() {
		this.fetchAttendances({
			startDate: this.startUnix,
			endDate: this.endUnix
		});
	}
};
