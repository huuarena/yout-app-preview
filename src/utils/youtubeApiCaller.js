import axios from 'axios';
import { CONFIG } from '../config';

/**
 *
 * @param {String} endpoint
 * @param {String} method
 * @param {Object} data
 */
export const callYoutubeApi = async (endpoint, method = 'GET', data) => {
    console.log('url :', YOUTUBE_API_BASE_URL + endpoint);

    try {
        const res = await axios({
            url: endpoint,
            method,
            data,
            headers: {},
            baseURL: CONFIG.YOUTUBE_API_BASE_URL,
        });

        return {
            success: true,
            payload: res.data,
        };
    } catch (error) {
        return {
            success: false,
            error: {
                message: error.message,
            },
        };
    }
};
