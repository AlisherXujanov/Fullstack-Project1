import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Crater from "../../assets/imgs/furniture/crater.jpg"
import Sofa from "../../assets/imgs/furniture/sofa.jpg"
import Table from "../../assets/imgs/furniture/table.jpg"
import "./style.scss"


export default function MyCarousel(props) {
    // https://www.npmjs.com/package/react-responsive-carousel


    const width = props.width || "60%"
    const radius = props.radius || "0"

    const imgHeight = props.imgHeight || "200px"

    const style = { 
        width, 
        margin: "0 auto",
        borderRadius: radius
    }

    return (
        <div id="carousel-wrapper-id" className="carousel-wrapper" style={style}>
            <div className="trends-info">
                <p>Best furniture for your castle....</p>

                <h1>New Furniture Collection Trends in 2023</h1>

                <small className="muted">
                    {/* lorem 15 */}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis consequatur dicta ullam fugit voluptatem nulla?
                </small>

                <button id="buy-now-btn" className="danger-btn" 
                    style={{'width': '150px', 'height':'50px'}}
                >
                    Shop Now
                </button>
            </div>
            <Carousel dynamicHeight={true} showThumbs={false} infiniteLoop={true}>
                <div>
                    <img src={Crater} alt="Crater" height={imgHeight}/>
                </div>
                <div>
                    <img src={Sofa} alt="Sofa" height={imgHeight}/>
                </div>
                <div>
                    <img src={Table} alt="Table" height={imgHeight}/>
                </div>
            </Carousel>
        </div>
    )
}
