import color from "@/assets/js/color.js";
import timestamp from "@/utils/timestamp.js";

export default {
	name: "Announcement",
	data() {
		return {
			color,
		};
	},
	methods: {
		unixToString(unix) {
			return timestamp.unixToString(unix);
		}
	},
	computed: {
		announcements() {
			return this.$store.state.announcements;
		},
	},
	created() {
		this.$store.dispatch('fetchAnnouncements');
	}
};
