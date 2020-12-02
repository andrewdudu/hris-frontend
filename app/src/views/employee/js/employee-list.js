import color from "@/assets/js/color.js";
import { mapActions, mapGetters } from "vuex";
import { lowerCase } from 'lodash';

export default {
	name: "Requests",
	data() {
		return {
			color
		};
	},
	methods: {
		...mapActions('department', ['fetchDepartments']),
		toLowerCase(str) {
			return lowerCase(str);
		}
	},
	computed: {
		...mapGetters('department', ['departments']),
	},
	created() {
		this.fetchDepartments();
	}
};
