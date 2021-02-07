import color from "@/assets/js/color.js";
import { mapActions, mapGetters } from "vuex";
import { lowerCase, capitalize, uniq } from 'lodash';
import config from '@/config';
import moment from 'moment';

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
			fileType: null,
			pdfRules: [
				v => !!v || 'File is required',
				v => v ? v.size < 1000000 || 'Max size: 1 MB' : 'File is required'
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
		...mapActions('user', ['fetchAvailableSpecialRequests', 'fetchQuotaLeave']),
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
				this.fileType = file.name.split('.').pop();
				reader.onload = () => {
					this.file = reader.result.substr(reader.result.indexOf(",") + 1);
				};
			}
		},
		onRequest() {
			let date = this.date;
			let files = this.file;
			if (Array.isArray(date) && date.length > 1) {
				date.sort();
				const startDate = moment(date[0], "YYYY-MM-DD");
				const endDate = moment(date[date.length - 1], "YYYY-MM-DD");
				let dateNow = startDate;
				do {
					dateNow = dateNow.add(1, 'days');
					date.push(dateNow.format("YYYY-MM-DD"));
				} while (dateNow.format('YYYY-MM-DD') !== endDate.format('YYYY-MM-DD'));

				date.sort();

				date = uniq(date);
			}
			else if (!Array.isArray(date)) date = [date];
			if (this.file !== null) {
				files = [`${this.fileType};` + this.file]
			}
			this.postRequestLeave({
				dates: Array.from(date),
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
		}
	},
	computed: {
		...mapGetters('user', ['availableSpecialRequests', 'quotaLeave']),
		valid() {
			return (this.pdf !== null || this.$route.query.type !== 'SICK_WITH_MEDICAL_LETTER') && this.date !== null && (this.note.length !== 0 || this.$route.query.type !== 'SUBSTITUTE_LEAVE') && this.note.length <= 256 && this.pdfSize < 1000000;
		},
		hasQuota() {
			return (this.$route.query.type === 'ANNUAL_LEAVE' || this.$route.query.type === 'EXTRA_LEAVE' || this.$route.query.type === 'SUBSTITUTE_LEAVE')
		}
	},
	created() {
		this.fetchAvailableSpecialRequests();
		if (this.hasQuota)
			this.fetchQuotaLeave(this.$route.query.type);
	}
};
