import "./style.scss"
import { useEffect, useContext } from 'react'
import { axiosCall } from '../../conf/axios'
import { BASE_URL, context } from "../../conf/store"
import { Link } from "react-router-dom"


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
        console.log(state)
    }

    useEffect(() => {
        getWishlist()
    }, [])


    return (
        <div className="wishlist-wrapper">
            <h1>Wishlist</h1>
            <div className="wishlist-items">
                {
                    state.wishlist.length > 0 ?
                        state.wishlist.map((item, index) => {
                            return (
                                <Link to={`/furniture-details/${item.id}`}>
                                    <div key={index}
                                        className="wishlist-item-wrapper"
                                    >
                                        <img
                                            className="item-image"
                                            src={BASE_URL + item.image}
                                            alt={item.name}
                                            width={"100%"}
                                        />
                                        <h2>Name: {item.name}</h2>
                                        <p>Description: {item.description}</p>
                                        <p>Category: {item.category}</p>
                                    </div>
                                </Link>
                            )
                        })
                        :
                        <p>Your wishlist is empty!</p>
                }
            </div>
        </div>
    );
}

export default Wishlist;