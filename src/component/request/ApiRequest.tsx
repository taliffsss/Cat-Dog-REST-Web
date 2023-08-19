import createAxiosInstance from './createAxiosInstance';
import { Logger } from '../utils/Logger';
import { pagination, ResponseType } from '../interface/DataInterface';

export const fetch = async (query?: pagination): Promise<ResponseType> => {
    const axiosInstance = await createAxiosInstance();
    try {
        const response = await axiosInstance.get<ResponseType>('/breeds', {
            params: query
        });
        Logger.info("Fetched successfully.", response.data);
        return response.data;
    } catch (err) {
        Logger.error("Error fetching data:", err);
        throw err;
    }
}

export const show = async (query?: pagination): Promise<ResponseType> => {
    const axiosInstance = await createAxiosInstance();
    try {
        const response = await axiosInstance.get<ResponseType>('/breed', {
            params: query
        });
        Logger.info("Fetched successfully.", response.data);
        return response.data;
    } catch (err) {
        Logger.error("Error fetching data:", err);
        throw err;
    }
}

export const fetchImage = async (query?: pagination): Promise<ResponseType> => {
    const axiosInstance = await createAxiosInstance();
    try {
        const response = await axiosInstance.get<ResponseType>('/images', {
            params: query
        });
        Logger.info("Fetched successfully.", response.data);
        return response.data;
    } catch (err) {
        Logger.error("Error fetching data:", err);
        throw err;
    }
}
