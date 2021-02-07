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
			requestDialog: false,
			total: 0,
			id: this.$route.query.id,
			breadcrumbsItems: [
				{
					text: 'Request',
					disabled: false,
					href: '/request',
				},
				{
					text: 'Employee',
					disabled: false,
					href: '/department',
				},
				{
					text: this.$route.query.name,
					disabled: false,
					href: `/employee?department=${this.$route.query.department}&name=${this.$route.query.name}`
				},
				{
					text: 'Detail',
					disabled: true
				},
			],
		};
	},
	methods: {
		...mapActions('employee', ['fetchEmployeeDetail']),
		...mapActions('request', ['postAddSubstituteLeave']),
		...mapActions('component', ['openSnackbar']),
		nameToInitials(name) {
			return nameToInitials(name);
		},
		unixToTime(value) {
			return timestamp.unixToTime(value);
		},
		onAddSubstituteLeave() {
			console.log(this.total);
			this.postAddSubstituteLeave({
				total: this.total,
				id: this.id
			}).then(() => {
				this.openSnackbar({
					message: 'Added Successfully.',
					color: 'success'
				})
			}).catch(() => {
				this.openSnackbar({
					message: 'Something went wrong, please try again later.',
					color: 'error'
				})
			});
			this.requestDialog = false;
		}
	},
	computed: {
		...mapGetters('employee', ['employeeDetail']),
		valid() {
			return (typeof parseInt(this.total) === 'number') && this.total !== 0 && this.total > 0;
		}
	},
	created() {
		this.fetchEmployeeDetail(this.id);
	}
};
