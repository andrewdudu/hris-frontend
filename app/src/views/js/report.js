import color from "@/assets/js/color.js";
import { mapActions, mapGetters } from "vuex";
import DoughnutChart from "@/components/DoughnutChart.js";

export default {
	name: "Announcement",
	components: {
		DoughnutChart
	},
	data() {
		return {
			color,
			dataCollectionMonth: {
				labels: ['Attendance', 'Absent'],
				datasets: [{
						data: [],
						backgroundColor: [color.success, color.error]
				}]
			},
			dataCollectionYear: {
				labels: ['Attendance', 'Absent'],
				datasets: [{
					data: [],
					backgroundColor: [color.success, color.error]
				}]
			}
		};
	},
	methods: {
		...mapActions('user', [
			'fetchAttendanceSummary'
		])
	},
	computed: {
		...mapGetters('user', ['attendanceSummary']),
		allData() {
			if (this.attendanceSummary !== null) {
				this.dataCollectionMonth.datasets[0].data = [this.attendanceSummary.month.attendance, this.attendanceSummary.month.absent];
				this.dataCollectionYear.datasets[0].data = [this.attendanceSummary.year.attendance, this.attendanceSummary.year.absent];
			}
			return {
				month: this.dataCollectionMonth,
				year: this.dataCollectionYear
			}
		}
	},
	created() {
		this.fetchAttendanceSummary();
	}
};
