import { createContext } from 'react';
const BASE_URL = "https://alisherkhujanov.pythonanywhere.com/"

const context = createContext()
const initialState = {
    isAuth: false,
    wishlist: [],
}

function globalReducer(state, action) {
    switch (action.type) {
        case "Auth":
            return { ...state, isAuth: true }
        case "NotAuth":
            return { ...state, isAuth: false }
        case "setWishlist":
            return { ...state, wishlist: action.payload }
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

