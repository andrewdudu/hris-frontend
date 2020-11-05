const config = {
	api: {
		basePath: '',
		user: {
			current:'/users/current-user'
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
