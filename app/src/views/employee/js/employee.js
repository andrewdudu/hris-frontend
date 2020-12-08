import color from "@/assets/js/color.js";
import { mapActions, mapGetters } from "vuex";
import _ from 'lodash';
import moment from 'moment';
import nameToInitials from "@/utils/name-to-initials";
import JsonExcel from "vue-json-excel";

export default {
	name: "Employee",
	components: {
		JsonExcel
	},
	data() {
		return {
			color,
			search: '',
			excelFields: {
				NIK: "employee.nik",
				Name: "employee.name",
				Position: "employee.position.name",
				"Org Unit": "employee.organizationUnit.name",
				"Absence Date": "dateString",
				"Absence Type": "typeLabel",
				"Start Date": {
					field: "date.start",
					callback: (value) => {
						return moment(value).format('DD/MM/YYYY')
					}
				},
				"Start Time": {
					field: "date.start",
						callback: (value) => {
						return moment(value).format('HH:mm')
					}
				},
				"End Date": {
					field: "date.end",
					callback: (value) => {
						return moment(value).format('DD/MM/YYYY')
					}
				},
				"End Time": {
					field: "date.end",
					callback: (value) => {
						return moment(value).format('HH:mm')
					}
				},
				Created: {
					field: "createdDate",
					callback: (value) => {
						return moment(value).format('DD/MM/YYYY hh:mm:ss')
					}
				},
				"Created By": "createdBy",
				"Last Modified": {
					field: "lastModifiedDate",
					callback: (value) => {
						return moment(value).format('DD/MM/YYYY hh:mm:ss')
					}
				},
				"Last Modified By": "lastModifiedBy",
				Notes: "notes"
			}
		};
	},
	methods: {
		...mapActions('employee', ['fetchEmployees']),
		...mapActions('request', ['fetchExcelReport']),
		nameToInitials(name) {
			return nameToInitials(name);
		},
		onChange() {
			this.fetchEmployees({
				name: this.search,
				department: this.$route.query.department
			})
		},
		async fetchExcelReportData() {
			await this.fetchExcelReport({
				name: this.search,
				department: this.$route.query.department
			}).then(res => console.log(res));

			return this.excelReport;
		},
		debounceInput: _.debounce(function() {
			this.onChange();
		}, 500)
	},
	computed: {
		...mapGetters('employee', ['employee']),
		...mapGetters('request', ['excelReport'])
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
