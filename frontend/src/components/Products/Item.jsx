import "./style.scss"
import { BASE_URL } from '../../conf/store.js'
import ZoomIn from "../../assets/icons/search-vector.png"
import Wishlist from "../../assets/icons/wishlist-vector.png"
import Cart from "../../assets/icons/card-vector.png"
import Sale from "../../assets/icons/sale.png"

function Item(props) {
    const DISCOUNT = 0.35
    const discountPrice = props.price - (props.price * DISCOUNT)
    return (
        <div className="product-item-wrapper">
            <div className="hover-info">
                <span><img src={Cart} alt="Sale" /></span>
                <span><img src={Wishlist} alt="Sale" /></span>
                <span><img src={ZoomIn} alt="Sale" /></span>
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