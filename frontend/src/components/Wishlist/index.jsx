import "./style.scss"
import { useEffect, useContext } from 'react'
import { axiosCall } from '../../conf/axios'
import { context } from "../../conf/store"


function Wishlist(props) {
    const state = useContext(context)

    async function getWishlist() {
        let headers = {
            "Authorization": "Bearer " + localStorage.getItem("access_token"),
        }
        const url = "api/furniture/wishlist/"
        const response = await axiosCall(url, null, headers)
        state.dispatch({
            type: "setWishlist",
            payload: response
        })
    }

    useEffect(() => {
        getWishlist()
    }, [])


    return (
        <div className="wishlist-wrapper">
            <h1>Wishlist</h1>
        </div>
    );
}

export default Wishlist;