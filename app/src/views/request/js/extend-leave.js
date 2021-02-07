import color from "@/assets/js/color.js";
import { mapActions, mapGetters } from "vuex";
import config from '@/config';
import moment from 'moment';

export default {
	name: "extend-leave",
	data() {
		return {
			color,
			config,
			modal: false,
			note: '',
			breadcrumbsItems: [
				{
					text: 'Request',
					disabled: false,
					href: '/request',
				},
				{
					text: 'Extend Leave',
					disabled: true,
					href: 'calendar',
				},
			],
		};
	},
	methods: {
		...mapActions('request', ['getExtendLeave', 'postExtendLeave']),
		...mapActions('component', ['openSnackbar']),
		toMonth(time) {
			return moment(time).format('MMM YYYY');
		},
		onRequest() {
			this.postExtendLeave({
				notes: this.notes,
			}).then(() => {
				this.openSnackbar({
					message: 'Request Successfully',
					color: 'success'
				});
				this.$router.push('/');
			}).catch(() => {
				this.openSnackbar({
					message: 'Something went wrong, please try again later.',
					color: 'error'
				});
			})
		},
	},
	computed: {
		...mapGetters('request', ['extendLeave'])
	},
	created() {
		this.getExtendLeave();
	}
};
