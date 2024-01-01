import { createContext } from 'react';
// const BASE_URL = "https://alisherkhujanov.pythonanywhere.com/"
const BASE_URL = "http://127.0.0.1:8000/"


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
            const payload = action.payload
            if (payload.furniture_id && payload.delete_furniture) {
                return { ...state, 
                    wishlist: state.wishlist.filter(item => item.id !== payload.furniture_id) 
                }
            } else {
                return { ...state, wishlist: action.payload }
            }
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

