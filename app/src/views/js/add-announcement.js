import color from "@/assets/js/color.js";
import { mapActions } from "vuex";
import config from '@/config';

export default {
	name: "request-leave",
	data() {
		return {
			color,
			config,
			note: '',
			title: '',
			breadcrumbsItems: [
				{
					text: 'Request',
					disabled: false,
					href: '/request',
				},
				{
					text: 'Add Announcement',
					disabled: true,
					href: '/add-announcement',
				},
			],
		};
	},
	methods: {
		...mapActions('announcement', ['postAnnouncement']),
		...mapActions('component', ['openSnackbar']),
		onRequest() {
			this.postAnnouncement({
				title: this.title,
				notes: this.note
			}).then(() => {
				this.openSnackbar({
					message: 'Added Successfully',
					color: 'success'
				});
				this.$router.push('/');
			}).catch(() => {
				this.openSnackbar({
					message: 'Something went wrong, please try again later.',
					color: 'error'
				});
			})
		}
	},
	computed: {
		valid() {
			return (this.note !== "" && this.note !== null) && (this.title !== "" && this.title !== null);
		}
	},
};
