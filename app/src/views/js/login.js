import color from "@/assets/js/color.js";
import { mapActions } from "vuex";

export default {
	name: "Login",
	data() {
		return {
			color,
			valid: true,
			isError: false,
			password: '',
			passwordRules: [
				v => !!v || 'Password is required',
				v => (v && v.length >= 8) || 'Password must be more than 7 characters',
			],
			email: '',
			emailRules: [
				v => !!v || 'E-mail is required',
				v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
			],
		};
	},
	methods: {
		onLogin() {
			this.postLogin({
				username: this.username,
				password: this.password
			})
				.then(res => this.onSuccess(res))
				.catch(err => this.onFail(err));
		},
		onSuccess() {
			this.$router.push('/');
		},
		onFail() {
			this.isError = true;
		},
		...mapActions('authentication', ['postLogin'])
	},
	computed: {
	}
};
