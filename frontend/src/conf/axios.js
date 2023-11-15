import axios from 'axios';
import { BASE_URL } from './store.js';



async function axiosCall(path, data = null, headers = null, method = "GET") {
    try {
        const url = BASE_URL + path
        const response = await axios({
            method,
            url,
            data,
            headers: headers ? headers : { 'Content-Type': 'application/json' },
            withCredentials: true
        });
        return response.data;
    } catch (error) {
        console.error(`Error in axiosCall`);
        console.error(error);
    }
}


export default axiosCall;