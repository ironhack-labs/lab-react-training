import './Carousel.css'
import { useState } from "react"

const Carousel = ({ images }) => {

    const [currentImage, setCurrentImage] = useState(0)

    const incrementCurrentImage = () => {
        setCurrentImage(currentImage + 1)
    }

    const decrementCurrentImage = () => {
        setCurrentImage(currentImage - 1)
    }

    return (

        <div className='image'>

            <button onClick={decrementCurrentImage}> -</button>
            <img src={images[currentImage]} alt="" />
            <button onClick={incrementCurrentImage}> +</button>

        </div>

    )
}

export default Carousel