import './Carousel.css'
import { useState } from 'react'

const Carousel = ({ images }) => {

    const [carouselImg, setCarouselImg] = useState(0)

    const moveLeft = () => setCarouselImg(carouselImg - 1)
    const moveRight = () => setCarouselImg(carouselImg + 1)

    if (carouselImg < 0) {
        setCarouselImg(3)
    }
    else if (carouselImg > 3) {
        setCarouselImg(0)
    }

    return (
        <div>
            <img src={images[carouselImg]} alt="" />
            <button onClick={moveLeft}>Left</button>
            <button onClick={moveRight}>Right</button>
        </div>
    )
}

export default Carousel