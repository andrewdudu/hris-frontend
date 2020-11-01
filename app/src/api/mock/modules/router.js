import ApiRoutes from './api-routes';

const routes = ApiRoutes;

const call = (path, time = 1000) => {
	return new Promise((resolve => {
		const response = routes.find(route => route.url === path).response;

		setTimeout(() => {
			resolve(response);
		}, time)
	}))
};

export default {
	call
}
