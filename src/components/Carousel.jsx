import './Carousel.css'
import React, { useState } from 'react';

const Carousel = (props) => {
    const [carouselImg, setcarouselImg] = useState(0)

    const leftClick = () => {
        setcarouselImg((carouselImg - 1 + props.images.length) % props.images.length)
    }
    const rightClick = () => {
        setcarouselImg((carouselImg + 1) % props.images.length)
    }

    return (
        <div className='carousel'>
            <button className='carousel-button' onClick={leftClick}>
                left
            </button>
            <img src={props.images[carouselImg]} alt="Carousel" />
            <button className='carousel-button' onClick={rightClick} >
                Right
            </button>
        </div>
    )
}

export default Carousel




