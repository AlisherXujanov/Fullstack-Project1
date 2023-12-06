import './style.scss'
import { getFurnitures } from '../../conf/common'

function Products() {

    async function fetchFurnitures() {
        let r = await getFurnitures()
        console.log(r)
    }
    const btn_style = {
        padding: "10px 30px",
        width: '200px',
    }

    return (
        <div id="product-page">
            <h1>Products</h1>
            <button style={btn_style} className='success-btn'
                onClick={fetchFurnitures}
            >
                Get items
            </button>
        </div>
    );
}

export default Products;