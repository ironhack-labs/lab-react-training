import { useState } from 'react'

const Carousel = ({ images }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    const goLeft = () => {
        const newIndex = (currentImageIndex - 1 + images.length) % images.length
        setCurrentImageIndex(newIndex)
    }

    const goRight = () => {
        const newIndex = (currentImageIndex + 1) % images.length
        setCurrentImageIndex(newIndex)
    }

    return (
        <div>
            <button onClick={goLeft}>Left</button>
            <img src={images[currentImageIndex]} alt="Carousel" />
            <button onClick={goRight}>Right</button>
        </div>
    )
}

export default Carousel