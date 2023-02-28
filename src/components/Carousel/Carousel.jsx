import { useState } from 'react'
import './Carousel.css'

const Carousel = ({ images }) => {
    const [imagesValue, setImagesValue] = useState(0)

    const leftImage = () => {
        imagesValue === 0 ? setImagesValue(images.length - 1) : setImagesValue(imagesValue - 1)
    }

    const rightImage = () => {
        setImagesValue((imagesValue + 1) % images.length)
    }

    return (
        <div className='Carousel'>
            <img src={images[imagesValue]} alt="photo" />
            <button onClick={leftImage}>Left</button>
            <button onClick={rightImage}>Right</button>

        </div>
    )
}

export default Carousel