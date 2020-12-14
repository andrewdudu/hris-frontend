import color from "@/assets/js/color.js";
import nameToInitials from "@/utils/name-to-initials";
import { mapActions, mapGetters } from "vuex";
import timestamp from "@/utils/timestamp";
import string from "@/utils/string";

export default {
	name: "Login",
	data() {
		return {
			color
		};
	},
	methods: {
		...mapActions('user', ['fetchUserProfile']),
		unixToString(value) {
			return timestamp.unixToString(value);
		},
		camelCaseToTitleCase(str) {
			return string.camelCaseToTitleCase(str);
		},
		onSeeDetail() {
			this.$router.push('/profile/report')
		}
	},
	computed: {
		...mapGetters('user', ['currentUser', 'userProfile']),
		initials() {
			if (this.currentUser !== null) {
				return nameToInitials(this.currentUser.name);
			}
			return "G";
		},
	},
	created() {
		this.fetchUserProfile(this.currentUser.id);
	}
};
