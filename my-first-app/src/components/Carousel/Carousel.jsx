import { useState } from "react";
import "./Carousel.css"

const Carousel = ({ images }) => {
    const [currentValue, setCurrentValue] = useState(0)

    const moveLeft = () => {
        const position = currentValue === 0 ? images.length - 1 : currentValue - 1
        setCurrentValue(position)
    }

    const moveRight = () => {
        const position = currentValue === images.length - 1 ? 0 : currentValue + 1
        setCurrentValue(position)
    }
    return (
        <div className="buttonsCarousel">
            <button onClick={moveLeft}> Previous </button>
            <img src={images[currentValue]} alt="carousel" />
            <button onClick={moveRight}> Next </button>
        </div>
    )

}


export default Carousel