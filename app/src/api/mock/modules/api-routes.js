const routes = [
	{
		method: 'GET',
		url: '/users/current-user',
		status: 200,
		response: {
			code: 200,
			status: "Success",
			data: {
				username: "example@example.com",
				name: "Andrew Wijaya",
				roles: ["EMPLOYEE"],
				department: "Technology",
				office: {
					name: "Sarana Jaya"
				},
				joinDate: 788781273,
				leave: {
					remaining: 10
				}
			}
		}
	},
	{
		method: 'GET',
		url: '/dashboard/summary',
		status: 200,
		response: {
			code: 200,
			status: "Success",
			data: {
				report: {
					working: 230,
					absent: 10
				},
				request: {
					incoming: 20
				},
				calendar: {
					date: 7817283721,
					status: "WORKING"
				},
				attendance: {
					current: {
						date: {
							start: 1604545200
						},
						location: {
							type: "INSIDE|OUTSIDE"
						}
					},
					latest: {
						date: {
							start: 1603970498,
							end: 1287383
						},
						location: {
							type: "INSIDE"
						}
					}
				}
			}
		}
	},
	{
		method: 'GET',
		url: '/announcements',
		status: 200,
		response: {
			code: 200,
			status: "Success",
			data: [
				{
					id: "123767123-12837891273-aldfh123",
					title: "Independence Day",
					date: 1603970498,
					description: "Due to Indonesia’s public holiday on 17 August 2020, It will be a mass leaves for everyone."
				},
				{
					id: "123767123-12837891273-aldfh12",
					title: "Independence Day",
					date: 1603970498,
					description: "Due to Indonesia’s public holiday on 17 August 2020, It will be a mass leaves for everyone."
				},
				{
					id: "123767123-12837891273-aldfh13",
					title: "Independence Day",
					date: 1603970498,
					description: "Due to Indonesia’s public holiday on 17 August 2020, It will be a mass leaves for everyone."
				},
				{
					id: "123767123-12837891273-aldh123",
					title: "Independence Day",
					date: 1603970498,
					description: "Due to Indonesia’s public holiday on 17 August 2020, It will be a mass leaves for everyone."
				},
				{
					id: "123767123-1287891273-aldfh123",
					title: "Independence Day",
					date: 1603970498,
					description: "Due to Indonesia’s public holiday on 17 August 2020, It will be a mass leaves for everyone."
				}
			]
		}
	},
	{
		method: 'POST',
		url: '/attendances/_clock-in',
		status: 200,
		response: {
			code: 200,
			status: "Success",
			data: {
				image: "http://image.webp",
				location: {
					lat: 787.123123,
					lon: 178.123123
				}
			}
		}
	},
	{
		method: 'POST',
		url: '/attendances/_clock-out',
		status: 200,
		response: {
			code: 200,
			status: "Success",
			data: {
				location: {
					lat: 787.123123,
					lon: 178.123123
				}
			}
		}
	},
	{
		method: 'POST',
		url: '/login',
		status: 200,
		response: {
			code: 200,
			status: "Success",
			data: {
				username: "example@example.com",
				name: "John Doe",
				roles: ["EMPLOYEE"],
				department: "Technology",
				office: {
					name: "Sarana Jaya"
				},
				joinDate: 1603970498,
				leave: {
					remaining: 10
				}
			}
		}
	},
	{
		method: 'GET',
		url: '/users/current-user/attendance-summary',
		status: 200,
		response: {
			code: 200,
			status: "Success",
			data: {
				month: {
					attendance: 120,
					leave: 2,
					absence: 2
				},
				year: {
					attendance: 120,
					leave: 2,
					absence: 2
				}
			}
		}
	},
	{
		method: 'GET',
		url: '/users/example@example.com/profile',
		status: 200,
		response: {
			code: 200,
			status: "Success",
			data: {
				attendance: 230,
				leave: {
					sick: 5,
					marriage: 2,
					childBaptism: 2,
					childCircumcision: 0,
					childBirth: 0,
					hajj: 0,
					maternity: 0,
					mainFamilyDeath: 0,
					closeFamilyDeath: 0
				},
				quota: {
					annual: 8,
					extra: 2
				}
			}
		}
	},
	{
		method: 'GET',
		url: '/users/example@example.com/leave-quotas',
		status: 200,
		response: {
			code: 200,
			status: "Success",
			data: [
				{
					type: "annual",
					remaining: 10,
					used: 2,
					expire: 1603970498
				},
				{
					type: "extra",
					remaining: 3,
					used: 1,
					expire: 1603970498
				},
				{
					type: "substitute",
					remaining: 2,
					used: 1,
					expiries: [1603970498, 1603970497]
				}
			]
		}
	},
	{
		method: 'GET',
		url: '/users/current-user/available-requests',
		status: 200,
		response: {
			code: 200,
			status: 'Success',
			data: [
				"ATTENDANCE",
				"ANNUAL_LEAVE",
				"SPECIAL_LEAVE",
				"EXTRA_LEAVE",
				"SUBSTITUTE_LEAVE",
				"EXTEND_ANNUAL_LEAVE"
			]
		}
	},
	{
		method: 'GET',
		url: '/users/current-user/available-special-requests',
		status: 200,
		response: {
			code: 200,
			status: 'Success',
			data: [
				"SICK",
				"SICK_WITH_MEDICAL_LETTER",
				"MARRIAGE",
				"MATERNITY",
				"CHILDBIRTH",
				"MAIN_FAMILY_DEATH",
				"CLOSE_FAMILY_DEATH",
				"HAJJ",
				"CHILD_BAPTISM",
				"CHILD_CIRCUMCISION",
				"UNPAID_LEAVE"
			]
		}
	},
	{
		method: 'POST',
		url: '/request/leave',
		status: 200,
		response: {
			code: 200,
			status: 'Success',
			data: {
				dates: ["2020-11-11"],
				files: ["https://google.com"],
				notes: "notes",
				type: "SICK"
			}
		}
	},
	{
		method: 'GET',
		url: '/request/extend-leave',
		status: 200,
		response: {
			code: 200,
			status: 'Success',
			data: {
				status: "AVAILABLE",
				quota: {
					remaining: 8,
					extensionDate: 1603970498
				}
			}
		}
	},
	{
		method: 'POST',
		url: '/request/extend-leave',
		status: 200,
		response: {
			code: 200,
			status: 'Success',
			data: {
				status: 'REQUESTED',
				notes: 'notes'
			}
		}
	}
];

export default routes;
