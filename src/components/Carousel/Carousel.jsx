import './Carousel.css'
import { useState } from "react"

function Carousel ({ images }) {

    const [carouselImage, setCarouselImage] = useState(0)

    const moveRight = () => setCarouselImage(carouselImage + 1)
    const moveLeft = () => setCarouselImage(carouselImage - 1)

    if (carouselImage < 0) {
        setCarouselImage(3)
    } else if (carouselImage > 3) {
        setCarouselImage(0)
    }
    

    return (
           <div className="Buttons">
                <button onClick={moveLeft}>Left</button>
                <img src={images[carouselImage]} alt="Human being"/>
                <button onClick={moveRight}>Right</button>
           </div>
    )
}

export default Carousel