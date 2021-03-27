import React from 'react'
import './Carousel.scss'

const CarouselImg = ({ img }) => {
    return (
        <div className="CarouselImg">
            <img src={img} alt="imgCarousel" />
        </div>
    )
}

export default CarouselImg
