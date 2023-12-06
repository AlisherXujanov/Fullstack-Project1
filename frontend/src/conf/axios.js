import axios from 'axios';
import { BASE_URL } from './store.js';

async function axiosCall(path, data = null, headersData = null, method = "GET") {
    try {
        const url = BASE_URL + path
        const headers = { 'Content-Type': 'application/json', ...headersData }
        const response = await axios({
            method,
            url,
            data,
            headers,
            withCredentials: true
        });
        return response.data;
    } catch (error) {
        console.error(`Error in axiosCall`);
        console.error(error.message);
        return error
    }
}
export {
    axiosCall
}