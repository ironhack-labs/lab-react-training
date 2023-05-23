import { useState } from 'react'
import './Carousel.css'

const Carousel = ({ images }) => {
    const [currentIndex, setIndex] = useState(0)

    const handleLeftClick = () => {
        setIndex(index => index === 0 ? images.length - 1 : index - 1)
    }

    const handleRightClick = () => {
        setIndex(index => index === images.length ? index === 0 : index + 1)
    }


    return (
        <div>
            <button className='left' onClick={handleLeftClick}> Previous </button>
            <img src={images[currentIndex]} alt="carousel" />
            <button className='right' onClick={handleRightClick}> Next </button>
        </div>
    )

}

export default Carousel