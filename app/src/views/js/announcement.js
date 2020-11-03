import color from "@/assets/js/color.js";
import timestamp from "@/utils/timestamp.js";
import { mapActions, mapGetters } from "vuex";

export default {
	name: "Announcement",
	data() {
		return {
			color,
		};
	},
	methods: {
		...mapActions('announcement', [
			'fetchAnnouncements'
		]),
		unixToString(unix) {
			return timestamp.unixToString(unix);
		}
	},
	computed: {
		...mapGetters('announcement', ['announcements'])
	},
	created() {
		this.fetchAnnouncements();
	}
};
