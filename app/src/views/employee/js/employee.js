import color from "@/assets/js/color.js";
import { mapActions, mapGetters } from "vuex";
import _ from 'lodash';
import nameToInitials from "@/utils/name-to-initials";

export default {
	name: "Requests",
	data() {
		return {
			color,
			search: ''
		};
	},
	methods: {
		...mapActions('employee', ['fetchEmployees']),
		nameToInitials(name) {
			return nameToInitials(name);
		},
		onChange() {
			this.fetchEmployees({
				name: this.search,
				department: this.$route.query.department
			})
		},
		debounceInput: _.debounce(function() {
			this.onChange();
		}, 500)
	},
	computed: {
		...mapGetters('employee', ['employee']),
	},
	watch: {
		search(val) {
			if (!val) return;

			this.debounceInput();
		}
	},
	created() {
		this.fetchEmployees({
			department: this.$route.query.department
		});
	}
};
