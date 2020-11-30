import moment from 'moment';

export default {
	unixToDay(value) {
		return moment(value).format('dddd');
	},
	unixToShortDay(value) {
		return moment(value).format('ddd');
	},
	unixToMonth(value) {
		return moment(value).format('MMMM');
	},
	unixToYear(value) {
		return moment(value).format('YYYY');
	},
	unixToDate(value) {
		return moment(value).format('DD');
	},
	unixToTime(value) {
		return moment(value).format('hh:mm A');
	},
	unixToString(value) {
		return moment(value).format('DD MMMM YYYY');
	}
}
