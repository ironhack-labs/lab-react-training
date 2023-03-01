import { useState } from "react"

const Carousel = ({ images }) => {

    const [currentImage, setCurrentImage] = useState(0)

    const leftClick = () => {
        if (currentImage === 0) {
            setCurrentImage(images.length - 1)
        } else {
            setCurrentImage(currentImage - 1)
        }
    }

    const rightClick = () => {
        if (currentImage === images.length - 1) {
            setCurrentImage(0);
        } else {
            setCurrentImage(currentImage + 1)
        }
    }

    return (
        <div>
            <button onClick={leftClick}>Left</button>
            <img src={images[currentImage]} alt="carousel" />
            <button onClick={rightClick}>Right</button>
        </div>
    )
}

export default Carousel

