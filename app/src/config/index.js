const config = {
	api: {
		basePath: '',
		user: {
			current:'/users/current-user',
			currentSummary: '/users/current-user/attendance-summary',
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
		}
	}
};

export default config;
