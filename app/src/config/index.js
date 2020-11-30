const config = {
	api: {
		basePath: '',
		user: {
			current:'/api/users/current-user',
			currentSummary: '/api/users/current-user/attendance-summary',
			availableRequests: '/api/users/current-user/available-requests',
			availableSpecialRequests: '/api/users/current-user/available-special-requests',
			profile: (id) => `/api/users/${id}/profile`,
			leaveQuotas: (id) => `/api/users/${id}/leave-quotas`,
			attendanceSummary: '/api/users/current-user/attendance-summary'
		},
		dashboard: {
			summary: '/api/dashboard/summary'
		},
		announcement: '/api/announcements',
		attendance: {
			clockIn: '/api/attendances/_clock-in',
			clockOut: '/api/attendances/_clock-out',
			attendances: '/api/attendances'
		},
		authentication: {
			login: '/auth/login'
		},
		request: {
			leave: '/api/request/leaves',
			extend: '/api/request/extend-leave',
			attendance: '/api/request/attendances',
			incoming: '/api/requests',
			approve: (id) => `/api/request/${id}/_approve`,
			reject: (id) => `/api/request/${id}/_reject`
		},
		calendar: {
			day: '/api/calendar/days',
			setHoliday: (date) => `/api/calendar/days/${date}/events`
		}
	},
	requestRoute: {
		ATTENDANCE: '/request/attendance',
		ANNUAL_LEAVE: '/request/leave?type=ANNUAL_LEAVE',
		SPECIAL_LEAVE: '/request/special',
		EXTRA_LEAVE: '/request/leave?type=EXTRA_LEAVE',
		SUBSTITUTE_LEAVE: '/request/leave?type=SUBSTITUTE_LEAVE',
		EXTEND_ANNUAL_LEAVE: '/request/extend',
		INCOMING_REQUESTS: '/request/incoming',
		SET_HOLIDAY: '/calendar',
		EMPLOYEE: '/employee'
	},
	leaveIsOneDay: {
		ATTENDANCE: false,
		ANNUAL_LEAVE: false,
		EXTRA_LEAVE: false,
		SUBSTITUTE_LEAVE: true,
		SICK: true,
		SICK_WITH_MEDICAL_LETTER: false,
		MARRIAGE: false,
		MATERNITY: false,
		CHILDBIRTH: false,
		MAIN_FAMILY_DEATH: false,
		CLOSE_FAMILY_DEATH: true,
		HAJJ: false,
		CHILD_BAPTISM: false,
		CHILD_CIRCUMCISION: false,
		UNPAID_LEAVE: true
	}
};

export default config;
