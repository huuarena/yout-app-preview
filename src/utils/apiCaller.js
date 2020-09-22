import axios from 'axios';
import { CONFIG } from '../config';

/**
 *
 * @param {String} endpoint
 * @param {String} method
 * @param {Object} data
 */
export const callApi = async (endpoint, method = 'GET', data) => {
    try {
        const res = await axios({
            url: endpoint,
            method,
            data,
            headers: {},
            baseURL: CONFIG.API_HOST,
        });

        return res.data;
    } catch (error) {
        return {
            success: false,
            message: error.message,
        };
    }
};
