import { useState } from 'react'

const Carousel = ({ images }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    const handlePrevClick = () => {
        const newIndex = (currentImageIndex - 1 + images.length) % images.length
        setCurrentImageIndex(newIndex)
    }

    const handleNextClick = () => {
        const newIndex = (currentImageIndex + 1) % images.length
        setCurrentImageIndex(newIndex)
    }

    return (
        <div className="carousel">
            <img src={images[currentImageIndex]} alt="imagen" />
            <div className="buttons">
                <button onClick={handlePrevClick}>Left</button>
                <button onClick={handleNextClick}>Right</button>
            </div>
        </div>
    )
}

export default Carousel