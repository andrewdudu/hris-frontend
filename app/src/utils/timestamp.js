import moment from 'moment';

export default {
	unixToShortDay(value) {
		return moment(value).format('ddd');
	},
	unixToTime(value) {
		return moment(value).format('hh:mm A');
	},
	unixToString(value) {
		return moment(value).format('DD MMMM YYYY');
	}
}
