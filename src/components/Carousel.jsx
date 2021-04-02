import React, { useState } from 'react'

const Carousel = ({ imgs }) => {

    const [position, setPosition] = useState(0)

    const handlePrev = () => {
        position - 1 < 0 ? setPosition(imgs.length - 1) : setPosition(position - 1)
    }

    const handleNext = () => {
        position + 1 === imgs.length ? setPosition(0) : setPosition(position + 1)
    }

    return (
        <div className="Carousel">
            <button onClick={handlePrev}>Prev</button>
            <img src={imgs[position]} height={150} alt='carrouselIMG' />
            <button onClick={handleNext}>Next</button>
        </div>
    )
}

export default Carousel