import axios from 'axios';
import { BASE_URL } from './store.js';

export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-Type': 'application/json' }, // for POST requests
    withCredentials: true   // for cookies:  if not set, then cookies are not sent
});