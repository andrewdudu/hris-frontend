import ApiRoutes from './modules/api-routes'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

let routes = [
	...ApiRoutes
];

// axios mock method
const mock = new MockAdapter(axios)
const methodMap = {
	GET: 'onGet',
	PUT: 'onPut',
	POST: 'onPost',
	DELETE: 'onDelete'
};

function applyMock (data) {
	data.forEach(d => {
		console.log(d);
		const params = [d.url]
		switch (d.method) {
			case 'GET': params.push({ params: d.param_values })
				break
			case 'PUT':
			case 'POST':
				params.push(d.param_values)
				break
		}
		mock[methodMap[d.method]](...params)
			.reply(() => {
				const { url, method, status, response } = d
				console.log('Req: ', '[' + method + '] ' + url,
					'Status: ' + status,
					'Res: ', response)
				return [
					status || 200,
					response
				]
			})
	})
}

applyMock(routes);
