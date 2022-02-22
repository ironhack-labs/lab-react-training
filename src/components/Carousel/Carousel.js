import { useState } from 'react'
import './Carousel.css'

const Carousel = ({images}) => {

    const [imageIndex, setImageIndex] = useState(0)

    const imageLeft = () => {
        const index = imageIndex === 0 ? images.length : imageIndex
        setImageIndex(index-1);
        console.log('left : ', imageIndex)
    }

    const imageRight = () => {
        const index = imageIndex === images.length-1 ? -1 : imageIndex
        setImageIndex(index+1)
        console.log('Right', imageIndex)
    }

    return(
        <div className="carousel">
            <img src={images[imageIndex]} alt=""/>
            <div>
                <button onClick={imageLeft}>Left</button>
                <button onClick={imageRight}>Right</button>
            </div>
        </div>
    )
} 

export default Carousel;