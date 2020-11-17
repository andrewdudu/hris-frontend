import color from "@/assets/js/color.js";
import { mapActions, mapGetters } from "vuex";
import { lowerCase } from 'lodash';
import config from '@/config';
import moment from 'moment';

export default {
	name: "extend-leave",
	data() {
		return {
			color,
			config,
			modal: false,
			note: ''
		};
	},
	methods: {
		...mapActions('request', ['getExtendLeave', 'postExtendLeave']),
		toLowerCase(str) {
			return lowerCase(str);
		},
		toMonth(time) {
			return moment.unix(time).format('MMM YYYY');
		},
		onRequest() {
			this.postExtendLeave({
				notes: this.notes,
			}).then(res => {
				console.log(res);
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
