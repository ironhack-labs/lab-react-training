import { useState } from "react"
import '../Carousel/Carousel.css'


const Carousel = ({ images }) => {

    const [currentImageIndex, setImageIndex] = useState(0)

    const leftImage = () => {
        currentImageIndex > 0 ? setImageIndex(currentImageIndex - 1) : setImageIndex(images.length - 1)
    }
    const rightImage = () => {
        currentImageIndex < images.length - 1 ? setImageIndex(currentImageIndex + 1) : setImageIndex(0)
    }


    return (
        <div className="Carousel">
            <button onClick={leftImage}>Left</button>
            <img src={images[currentImageIndex]} alt="photos" />
            <button onClick={rightImage}>Right</button>
        </div>
    )
}

export default Carousel