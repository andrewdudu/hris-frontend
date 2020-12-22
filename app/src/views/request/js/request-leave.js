import color from "@/assets/js/color.js";
import { mapActions, mapGetters } from "vuex";
import { lowerCase, capitalize } from 'lodash';
import config from '@/config';

export default {
	name: "request-leave",
	data() {
		return {
			color,
			config,
			date: null,
			menu: false,
			modal: false,
			note: '',
			file: null,
			url: null,
			pdf: null,
			pdfSize: null,
			pdfUrl: null,
			dateRules: [
				v => !!v || 'Date is required'
			],
			pdfRules: [
				v => !!v || 'File is required'
			],
			noteRules: [
				v => this.$route.query.type !== 'SUBSTITUTE_LEAVE' || !!v || 'Note is required',
				v => v.length <= 256 || 'Name must be less or equal than 256 characters'
			],
			breadcrumbsItems: [
				{
					text: 'Request',
					disabled: false,
					href: '/request',
				},
				{
					text: capitalize(lowerCase(this.$route.query.type)),
					disabled: true,
					href: 'calendar',
				},
			],
		};
	},
	methods: {
		...mapActions('request', ['postRequestLeave']),
		...mapActions('user', ['fetchAvailableSpecialRequests']),
		...mapActions('component', ['openSnackbar']),
		toLowerCase(str) {
			return lowerCase(str);
		},
		onFileChange(file) {
			let reader = new FileReader();
			this.url = null;
			if (file !== undefined) {
				reader.readAsDataURL(file);
				this.pdfSize = file.size;
				this.pdfUrl = URL.createObjectURL(file);
				reader.onload = () => {
					this.file = reader.result.substr(reader.result.indexOf(",") + 1);
				};
			}
		},
		onRequest() {
			let date = this.date;
			let files = this.file;
			if (Array.isArray(date)) {
				date.sort;
			}
			else date = [date];
			if (this.file !== null) {
				files = ['pdf;' + this.file]
			}
			this.postRequestLeave({
				dates: date,
				files,
				notes: this.note,
				type: this.$route.query.type
			}).then(() => {
				this.openSnackbar({
					message: 'Request Successfully',
					color: 'success'
				});
				this.$router.push('/');
			}).catch((err) => {
				const errors = err.response.data.errors;
				let message = 'Something went wrong, please try again later.';
				let key = Object.keys(errors)[0];
				if (err.response.data.code === 400) {
					message = config.errMessage[errors[key]];
				}

				this.openSnackbar({
					message,
					color: 'error'
				});
			})
		},
		dateRange(startDate, endDate, steps = 1) {
			const dateArray = [];
			let currentDate = new Date(startDate);

			while (currentDate <= new Date(endDate)) {
				dateArray.push(new Date(currentDate).toISOString().substr(0, 10));
				// Use UTC date to prevent problems with time zones and DST
				currentDate.setUTCDate(currentDate.getUTCDate() + steps);
			}

			return dateArray;
		}
	},
	computed: {
		...mapGetters('user', ['availableSpecialRequests']),
		valid() {
			return (this.pdf !== null || this.$route.query.type !== 'SICK_WITH_MEDICAL_LETTER') && this.date !== null && (this.note.length !== 0 || this.$route.query.type !== 'SUBSTITUTE_LEAVE') && this.note.length <= 256;
		}
	},
	created() {
		this.fetchAvailableSpecialRequests();
	}
};
