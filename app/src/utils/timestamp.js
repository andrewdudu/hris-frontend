import moment from 'moment';

export default {
	unixToDay(value) {
		return moment.unix(value).format('dddd');
	},
	unixToShortDay(value) {
		return moment.unix(value).format('ddd');
	},
	unixToMonth(value) {
		return moment.unix(value).format('MMMM');
	},
	unixToYear(value) {
		return moment.unix(value).format('YYYY');
	},
	unixToDate(value) {
		return moment.unix(value).format('DD');
	},
	unixToTime(value) {
		return moment.unix(value).format('hh:mm A');
	},
	unixToString(value) {
		return moment.unix(value).format('DD MMMM YYYY');
	}
}
