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
}        

export {
    logoutEntirely,
    isLoggedIn,
    ACCESS_TOKEN_KEY,
    REFRESH_TOKEN_KEY
}