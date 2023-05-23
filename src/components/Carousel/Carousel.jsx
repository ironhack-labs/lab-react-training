import { useState } from "react"
import './Carousel.css'

const Carousel = ({ images }) => {

    const [carouselImage, setImage] = useState(0)

    const changeImageL = () => carouselImage <= 0 ? setImage(images.length - 1) : setImage(carouselImage - 1)

    const changeImageR = () => carouselImage >= images.length - 1 ? setImage(0) : setImage(carouselImage + 1)
    return (
        <div className="carousel">
            <div>
                <button onClick={changeImageL}>Left</button>
                <button onClick={changeImageR}>Rigth</button>
            </div>
            <img src={images[carouselImage]} alt="" />
        </div>
    )
}

export default Carousel