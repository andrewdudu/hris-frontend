const routes = [
	{
		method: 'GET',
		url: '/api/users/current-user',
		status: 200,
		response: {
			code: 200,
			status: "Success",
			data: {
				id: "aw",
				username: "example@example.com",
				name: "Andrew Wijaya",
				roles: ["EMPLOYEE"],
				department: "Technology",
				office: {
					name: "Sarana Jaya"
				},
				joinDate: 1590339600000,
				leave: {
					remaining: 10
				}
			}
		}
	},
	{
		method: 'GET',
		url: '/api/dashboard/summary',
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
							start: null
						},
						location: {
							type: "INSIDE|OUTSIDE"
						},
						status: "AVAILABLE"
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
		url: '/api/announcements',
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
		url: '/api/attendances/_clock-in',
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
		url: '/api/attendances/_clock-out',
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
		url: '/auth/login',
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
		url: '/api/users/current-user/attendance-summary',
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
		url: '/api/users/aw/profile',
		status: 200,
		response: {
			code: 200,
			status: "Success",
			data: {
				attendance: 230,
				leave: {
					pending: {
						sick: 5,
						childBirth: 10
					},
					approved: {
						sick: 10,
						childCircumcision: 3
					}
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
		url: '/api/users/aw/leave-quotas',
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
		url: '/api/users/current-user/available-requests',
		status: 200,
		response: {
			code: 200,
			status: 'Success',
			data: [
				"ATTENDANCE",
				"ANNUAL_LEAVE",
				"HOURLY_LEAVE",
				"SPECIAL_LEAVE",
				"EXTRA_LEAVE",
				"SUBSTITUTE_LEAVE",
				"EXTEND_ANNUAL_LEAVE",
				"INCOMING_REQUESTS",
				"SET_HOLIDAY",
				"EMPLOYEE",
				"ADD_ANNOUNCEMENT"
			]
		}
	},
	{
		method: 'GET',
		url: '/api/users/current-user/available-special-requests',
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
		url: '/api/request/leaves',
		status: 400,
		param_values: {
			dates: ["2021-01-19"],
			files: ["pdf;iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR4nGNiOAMAANUAz5n+TlUAAAAASUVORK5CYII="],
			notes: "",
			type: "SICK_WITH_MEDICAL_LETTER"
		},
		response: {
			errors: ["QUOTA_NOT_AVAILABLE"]
		}
	},
	{
		method: 'POST',
		url: '/api/request/leaves',
		status: 400,
		param_values: {
			dates: ["2021-01-22"],
			files: ["pdf;iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR4nGNiOAMAANUAz5n+TlUAAAAASUVORK5CYII="],
			notes: "",
			type: "SICK_WITH_MEDICAL_LETTER"
		},
		response: {
			code: 400,
			errors: ["QUOTA_NOT_AVAILABLE"]
		}
	},
	{
		method: 'POST',
		url: '/api/request/leaves',
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
		url: '/api/request/extend-leave',
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
		url: '/api/request/extend-leave',
		status: 200,
		response: {
			code: 200,
			status: 'Success',
			data: {
				status: 'REQUESTED',
				notes: 'notes'
			}
		}
	},
	{
		method: 'POST',
		url: '/api/request/attendances',
		status: 400,
		param_values: {
			date: "2021-01-22",
			clockIn: "05:00",
			clockOut: "17:00",
			notes: ""
		},
		response: {
			code: 400,
			status: "Success",
			data: {
				date: "2020-05-25",
				clockIn: "08:00",
				clockOut: "17:00",
				notes: "notes"
			}
		}
	},
	{
		method: 'POST',
		url: '/api/request/attendances',
		status: 200,
		response: {
			code: 200,
			status: "Success",
			data: {
				date: "2020-05-25",
				clockIn: "08:00",
				clockOut: "17:00",
				notes: "notes"
			}
		}
	},
	{
		method: 'GET',
		url: '/api/attendances',
		status: 200,
		response: {
			code: 200,
			status: "Success",
			data: [
				{
					date: {
						start: 1603970498,
						end: 1603970498
					},
					location: {
						type: "INSIDE",
						lat: 78123.123123,
						lon: 78.123123
					}
				},
				{
					date: {
						start: 1603970498,
						end: 1603970498
					},
					location: {
						type: "OUTSIDE",
						lat: 78123.123123,
						lon: 78.123123
					}
				}
			]
		}
	},
	{
		method: 'GET',
		url: '/api/users/current-user/attendance-summary',
		status: 200,
		response: {
			code: 200,
			status: "Success",
			data: {
				month: {
					attendance: 120,
					absent: 20
				},
				year: {
					attendance: 120,
					absent: 2
				}
			}
		}
	},
	{
		method: 'GET',
		url: '/api/requests',
		status: 200,
		response: {
			code: 200,
			status: "Success",
			paging: {
				page: 0,
				total_page: 2,
				item_per_page: 10,
				total_item: 3,
				sort_by: null
			},
			data: [
				{
					id: "1823a87f-12387321adf-123123adf",
					user: {
						name: "John Doe",
						department: "Technology",
						office: {
							name: "Sarana Jaya"
						}
					},
					status: "PENDING",
					type: "ATTENDANCE",
					detail: {
						attendance: {
							date: {
								start: 788781273,
								end: 788781273
							},
							notes: "Forgot to fill attendance on 18 August 2020"
						}
					},
					date: 1590339600000
				},
				{
					id: "1823a87f-12387321adf-123123adf",
					user: {
						name: "John Doe",
						department: "Technology",
						office: {
							name: "Sarana Jaya"
						}
					},
					status: "PENDING",
					type: "LEAVE",
					detail: {
						leave: {
							dates: ["2020-09-25"],
							files: ["http://file.pdf", "http://file.webp"],
							notes: "Forgot to fill attendance on 18 August 2020",
							type: "SICK"
						}
					},
					date: 788781273
				},
				{
					id: "1823a87f-12387321adf-123123adf",
					user: {
						name: "John Doe",
						department: "Technology",
						office: {
							name: "Sarana Jaya"
						}
					},
					status: "PENDING",
					type: "EXTEND",
					detail: {
						extend: {
							notes: "Forgot to fill attendance on 18 August 2020"
						}
					},
					date: 788781273
				}
			]
		}
	},
	{
		method: 'POST',
		url: '/api/request/1823a87f-12387321adf-123123adf/_approve',
		status: 200,
		response: {
			code: 200,
			status: "Success",
			data: {
				id: "1823a87f-12387321adf-123123adf",
				user: {
					name: "John Doe",
					department: "Technology",
					office: {
						name: "Sarana Jaya"
					}
				},
				status: "PENDING",
				type: "ATTENDANCE",
				detail: {
					attendance: {
						date: {
							start: 788781273,
							end: 788781273
						},
						notes: "Forgot to fill attendance on 18 August 2020"
					}
				},
				date: 1590339600000
			}
		}
	},
	{
		method: 'POST',
		url: '/api/request/1823a87f-12387321adf-123123adf/_reject',
		status: 200,
		response: {
			code: 200,
			status: "Success",
			data: {
				id: "1823a87f-12387321adf-123123adf",
				user: {
					name: "John Doe",
					department: "Technology",
					office: {
						name: "Sarana Jaya"
					}
				},
				status: "PENDING",
				type: "ATTENDANCE",
				detail: {
					attendance: {
						date: {
							start: 788781273,
							end: 788781273
						},
						notes: "Forgot to fill attendance on 18 August 2020"
					}
				},
				date: 1590339600000
			}
		}
	},
	{
		method: 'GET',
		url: '/api/calendar/days',
		status: 200,
		response: {
			code: 200,
			status: "Success",
			data: [
				// {
				// 	date: 1606176000000,
				// 	status: "WORKING",
				// 	events: [
				// 		{
				// 			name: "Independence Day"
				// 		}
				// 	]
				// },
				// {
				// 	date: 1606315016000,
				// 	status: "WORKING",
				// 	events: [
				// 		{
				// 			name: "Independence Day"
				// 		}
				// 	]
				// },
				// {
				// 	date: 1606348800000,
				// 	status: "WORKING",
				// 	events: [
				// 		{
				// 			name: "Independence Day"
				// 		}
				// 	]
				// },
				{
					date: 1606435200000,
					status: "WORKING",
					events: [
						{
							name: "Independence Day"
						}
					]
				},
				{
					date: 1609521600000,
					status: "WORKING",
					events: [
						{
							name: "Independence Day"
						}
					]
				},
				{
					date: 1608708000000,
					status: "WORKING",
					events: [
						{
							name: "Independence Day"
						}
					]
				}
			]
		}
	},
	{
		method: 'POST',
		url: '/api/calendar/days/2020-12-23/events',
		status: 200,
		response: {
			code: 200,
			status: "Success",
			data: {
				name: "Independence Day",
				notes: "Notes",
				calendarStatus: "HOLIDAY"
			}
		}
	},
	{
		method: 'GET',
		url: '/api/departments',
		status: 200,
		response: {
			code: 200,
			status: "Success",
			data: [
				{
					name: "Human Resources",
					code: "HUMAN_RESOURCES"
				},
				{
					name: "Marketing",
					code: "MARKETING"
				},
				{
					name: "Operation",
					code: "OPERATION"
				},
				{
					name: "Technology",
					code: "TECHNOLOGY"
				}
			]
		}
	},
	{
		method: 'GET',
		url: '/api/employees',
		status: 200,
		response: {
			code: 200,
			status: "Success",
			data: [
				{
					id: "aw",
					name: "Andrew Wijaya",
					department: "Technology",
					office: {
						name: "Sarana Jaya"
					}
				},
				{
					id: "aw",
					name: "Andrew Wijaya",
					department: "Technology",
					office: {
						name: "Sarana Jaya"
					}
				},
				{
					id: "aw",
					name: "Andrew Wijaya",
					department: "Technology",
					office: {
						name: "Sarana Jaya"
					}
				},
				{
					id: "aw",
					name: "Andrew Wijaya",
					department: "Technology",
					office: {
						name: "Sarana Jaya"
					}
				}
			],
			paging: {}
		}
	},
	{
		method: 'GET',
		url: '/api/employee/aw',
		status: 200,
		response: {
			code: 200,
			status: "Success",
			data: {
				user: {
					name: "Andrew Wijaya",
					department: "Technology",
					office: {
						name: "Sarana Jaya"
					}
				},
				attendance: {
					image: "https://cdn.pixabay.com/photo/2015/03/26/09/47/sky-690293__340.jpg",
					date: {
						start: 7817238,
						end: 1287383
					},
					location: {
						type: "INSIDE",
						lat: 6.2088,
						lon: 106.8456
					}
				}
			}
		}
	},
	{
		method: 'GET',
		url: '/api/reports/leaves',
		status: 200,
		response: {
			code: 200,
			status: "Success",
			data: [
				{
					id: "1273-123-123",
					employee: {
						nik: "1273",
						name: "name",
						position: {
							name: "name"
						},
						department: {
							name: "Technology"
						},
						organizationUnit: {
							name: "name"
						},
						office: {
							name: "Sarana Jaya"
						}
					},
					dateString: "2020-05-25",
					type: "HAJJ",
					typeLabel: "Hajj",
					date: {
						start: 1608708000000,
						end: 1608708000000
					},
					createdDate: 1608708000000,
					createdBy: "username",
					lastModifiedDate: 1608708000000,
					lastModifiedBy: "username",
					notes: ""
				}
			]
		}
	},
	{
		method: 'GET',
		url: '/auth/logout',
		status: 200,
		response: {
			code: 200,
			status: "Success",
			data: {}
		}
	},
	{
		method: 'POST',
		url: '/api/announcement',
		status: 400,
		param_values: {
			title: "Test",
			notes: "Test"
		},
		response: {
			code: 400
		}
	},
	{
		method: 'POST',
		url: '/api/announcement',
		status: 200,
		response: {
			code: 200,
			status: "Success",
			data: {
				title: "title",
				notes: "notes"
			}
		}
	},
	{
		method: 'POST',
		url: '/api/substitute-leave',
		status: 200,
		response: {
			code: 200,
			status: "Success",
			data: {
				id: "id",
				total: 3
			}
		}
	},
	{
		method: 'POST',
		url: '/api/request/hourly',
		status: 200,
		response: {
			code: 200,
			status: "Success",
			data: {
				startTime: "11:00",
				endTime: "13:00",
				notes: "notes"
			}
		}
	},
	{
		method: 'POST',
		url: '/api/request/_approve',
		status: 200,
		response: {
			code: 200,
			status: "Success",
			data: {
				ids: [
					"abc"
				]
			}
		}
	},
	{
		method: 'GET',
		url: '/api/users/leave-quotas?code=ANNUAL_LEAVE',
		status: 200,
		response: {
			code: 200,
			status: "Success",
			data: {
				leaveQuota: 2
			}
		}
	},
	{
		method: 'GET',
		url: '/api/users/leave-quotas?code=EXTRA_LEAVE',
		status: 200,
		response: {
			code: 200,
			status: "Success",
			data: {
				leaveQuota: 2
			}
		}
	},
	{
		method: 'GET',
		url: '/api/users/leave-quotas?code=SUBSTITUTE_LEAVE',
		status: 200,
		response: {
			code: 200,
			status: "Success",
			data: {
				leaveQuota: 2
			}
		}
	}
];

export default routes;
