const config = {
	api: {
		basePath: '',
		user: {
			current:'/users/current-user',
			currentSummary: '/users/current-user/attendance-summary',
			availableRequests: '/users/current-user/available-requests',
			availableSpecialRequests: '/users/current-user/available-special-requests',
			profile: (id) => `/users/${id}/profile`,
			leaveQuotas: (id) => `/users/${id}/leave-quotas`
		},
		dashboard: {
			summary: '/dashboard/summary'
		},
		announcement: '/announcements',
		attendance: {
			clockIn: '/attendances/_clock-in',
			clockOut: '/attendances/_clock-out'
		},
		authentication: {
			login: '/login'
		},
		request: {
			leave: '/request/leave',
			extend: '/request/extend-leave',
			attendance: '/request/attendances'
		}
	},
	requestRoute: {
		ATTENDANCE: '/request/attendance',
		ANNUAL_LEAVE: '/request/leave?type=ANNUAL_LEAVE',
		SPECIAL_LEAVE: '/request/special',
		EXTRA_LEAVE: '/request/leave?type=EXTRA_LEAVE',
		SUBSTITUTE_LEAVE: '/request/leave?type=SUBSTITUTE_LEAVE',
		EXTEND_ANNUAL_LEAVE: '/request/extend'
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
