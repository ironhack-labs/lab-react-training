import './Carousel.css'
import { useState } from 'react'


function Carousel({ images }) {

    const [imgValue, setImgValue] = useState(0)

    const moveLeft = () => {
        let value = imgValue - 1
        setImgValue(value)
    }

    const moveRight = () => {
        let value = imgValue + 1
        setImgValue(value)
    }


    return (
        <div className='carousel'>
            <button onClick={moveLeft}> Left </button>
            <img src={images[imgValue]} alt="carousel image" />
            <button onClick={moveRight}> Right </button>
        </div>
    );
}

export default Carousel
