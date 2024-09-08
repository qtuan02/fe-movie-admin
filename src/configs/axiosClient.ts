import axios from 'axios';
import appConfig from './appConfig';

const axiosClient = axios.create({
	baseURL: appConfig.API_URL,
	headers: {
		'Content-Type': 'application/json',
		'Access-Control-Allow-Origin': '*',
	},
	withCredentials: false,
});

axiosClient.interceptors.request.use(
	(config) => {
		return config;
	},
	(error) => {
		return Promise.reject(error);
	},
);

axiosClient.interceptors.response.use(
	(response) => {
		return response;
	},
	async (error) => {
		return Promise.reject(error);
	},
);

export default axiosClient;