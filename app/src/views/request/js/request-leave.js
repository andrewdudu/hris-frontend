import color from "@/assets/js/color.js";
import { mapActions, mapGetters } from "vuex";
import { lowerCase } from 'lodash';
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
				v => !!v || 'Note is required',
				v => v.length <= 256 || 'Name must be less than 10 characters'
			]
		};
	},
	methods: {
		...mapActions('request', ['postRequestLeave']),
		...mapActions('user', ['fetchAvailableSpecialRequests']),
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
			if (Array.isArray(date)) {
				date.sort;
				console.log(this.dateRange(date[0], date[1]));
			}
			else date = [date];
			this.postRequestLeave({
				dates: date,
				files: [this.file],
				notes: this.notes,
				type: this.$route.query.type
			}).then(res => {
				console.log(res);
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
			return (this.pdf !== null || this.$route.query.type !== 'SICK_WITH_MEDICAL_LETTER') && this.date !== null && this.note.length !== 0 && this.note.length <= 256;
		}
	},
	created() {
		this.fetchAvailableSpecialRequests();
	}
};
