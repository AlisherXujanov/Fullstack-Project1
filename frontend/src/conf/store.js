import { createContext } from 'react';
const BASE_URL = "http://127.0.0.1:8000/"

const context = createContext()
const initialState = {
    isAuth: false,
}

function globalReducer(state, action) {
    switch (action.type) {
        case "LOGIN":
            return { ...state, isAuth: true }
        case "LOGOUT":
            return { ...state, isAuth: false }
        default:
            throw new Error("Unexpected action")
    }
}

export {
    context,
    initialState,
    globalReducer,
    BASE_URL,
}

