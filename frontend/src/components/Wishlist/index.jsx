import "./style.scss"
import { useEffect, useState } from 'react'
import { axiosCall } from '../../conf/axios'

function Wishlist(props) {
    const [wishlist, setWishlist] = useState([])

    async function getWishlist() {
        let headers = {
            "Authorization": "Bearer " + localStorage.getItem("access_token"),
        }
        const url = "api/furniture/wishlist/"
        const response = await axiosCall(url, null, headers)
        console.log(response)
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