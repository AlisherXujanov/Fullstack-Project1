import "./style.scss"
import { BASE_URL } from '../../conf/store.js'
import ZoomIn from "../../assets/icons/search-vector.png"
import Wishlist from "../../assets/icons/wishlist-vector.png"
import Cart from "../../assets/icons/card-vector.png"
import { axiosCall } from '../../conf/axios.js'
import { toast } from 'react-toastify'

function Item(props) {
    const DISCOUNT = 0.35
    const discountPrice = props.price - (props.price * DISCOUNT)
    // delete_furniture

    async function addToWishlist(e) {
        e.preventDefault()
        const data = { furniture_id: props.itemID }
        const response = await axiosCall(`api/furniture/wishlist/`, data, 
        {
            "Authorization": "Bearer " + localStorage.getItem("access_token"),
        }, "POST")
        console.log(response)
        toast.success("Successfully added into wishlist", {toastId: 14})
    }

    return (
        <div className="product-item-wrapper">
            <div className="hover-info">
                <span><img src={Cart} alt="Cart" /></span>
                <span onClick={addToWishlist} ><img src={Wishlist} alt="Wishlist" /></span>
                <span><img src={ZoomIn} alt="ZoomIn" /></span>
            </div>
            <img
                src={BASE_URL + props.image}
                alt="Product"
                width={"100%"}
                height={250}
            />
            <div className="info">
                <p>{props.name}</p>
                <div className="price">
                    ${discountPrice}
                    <span>${props.price}</span>
                </div>
            </div>
        </div>
    );
}

export default Item;