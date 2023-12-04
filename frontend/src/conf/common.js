import { axiosCall } from './axios.js'
import { toast } from 'react-toastify'
const ACCESS_TOKEN_KEY = 'access_token';
const REFRESH_TOKEN_KEY = 'refresh_token';

function isLoggedIn() {
    const token = localStorage.getItem(ACCESS_TOKEN_KEY);
    return token !== null;
}

function logoutEntirely() {
    toast.success('Logged out successfully', { toastId: 999 })
    localStorage.clear()
    // try {
    //     const data = {
    //         "refresh": localStorage.getItem(REFRESH_TOKEN_KEY)
    //     }
    //     axiosCall("api/token/blacklist/", data, null, "POST")
        
    // } catch (e) {
    //     console.error(e)
    //     toast.error('Error during logout', { toastId: 999 })
    // }
}        

export {
    logoutEntirely,
    isLoggedIn,
    ACCESS_TOKEN_KEY,
    REFRESH_TOKEN_KEY
}