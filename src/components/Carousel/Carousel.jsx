import { useState } from 'react'
import './Carousel.css'

function Carousel({ images }) {

    const [showCarousel, setShowCarousel] = useState(0)

    const rightImage = () => setShowCarousel(showCarousel + 1)
    const leftImage = () => setShowCarousel(showCarousel - 1)

    if (showCarousel < 0) {
        setShowCarousel(3)
    } else if (showCarousel > 3) {
        setShowCarousel(0)
    }

    return (
        <div>
            <button onClick={leftImage}>Left</button>
            <img src={images[showCarousel]} />
            <button onClick={rightImage}>Right</button>
        </div>
    )
}

export default Carousel