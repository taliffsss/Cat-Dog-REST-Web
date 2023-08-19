import axios from "axios";
import { Logger } from '../utils/Logger';

const createAxiosInstance = async () => {
	try {

		const axiosInstance = axios.create({
		baseURL: process.env.REACT_APP_API_URL,
			headers: {
				"Content-Type": "application/json",
			},
		});

		Logger.info("Axios instance running...");

		return axiosInstance;
	} catch (err) {
		Logger.error("Error posting task:", err);
		throw err;
	}
};

export default createAxiosInstance;
