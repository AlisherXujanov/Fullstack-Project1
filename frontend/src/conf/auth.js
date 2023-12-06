import { REFRESH_TOKEN_KEY, ACCESS_TOKEN_KEY } from './common.js';
import { axiosCall } from './axios.js'
import { toast } from 'react-toastify'

// "api/token/refresh/"


function registerNewUser(username, password, password2, email) {
    const new_user = {
        username,
        password,
        password2,
        email
    }
    return axiosCall("api/users/register/", new_user, null, "POST")
}

function logoutEntirely() {
    toast.success('Logged out successfully', { toastId: 999 })
    localStorage.clear()
    axiosCall("api/users/logout/", null, null, "POST")
}       

async function accessTokenIsValid() {
    try {
        const accessToken = localStorage.getItem(ACCESS_TOKEN_KEY);
        let response = await axiosCall(
            "api/token/verify/",
            { token: accessToken },
            null, "POST"
        )
        console.log(response)
        return true
    } catch (e) {
        console.error("Invalid access token detected: ", e)
        return false
    }
}

async function refreshTokenLS() {
    const refreshToken = localStorage.getItem(REFRESH_TOKEN_KEY);
}


export {
    registerNewUser,
    accessTokenIsValid,
    refreshTokenLS,
    logoutEntirely
}