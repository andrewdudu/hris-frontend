import color from "@/assets/js/color.js";
import { mapActions, mapGetters } from "vuex";
import nameToInitials from "@/utils/name-to-initials";
import Map from '@/components/Map.vue';
import timestamp from '@/utils/timestamp';

export default {
	name: "Employee-Detail",
	components: {
		Map
	},
	data() {
		return {
			color,
			dialog: false,
			id: this.$route.query.id
		};
	},
	methods: {
		...mapActions('employee', ['fetchEmployeeDetail']),
		nameToInitials(name) {
			return nameToInitials(name);
		},
		unixToTime(value) {
			return timestamp.unixToTime(value);
		}
	},
	computed: {
		...mapGetters('employee', ['employeeDetail']),
	},
	created() {
		this.fetchEmployeeDetail(this.id);
	}
};
