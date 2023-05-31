import React, { useState } from 'react'

const Carousel = (props) => {
    const [ shownPicture, setShownPicture ] = useState(0)
    const lastImage = () => {
        setShownPicture((prevPicture)=>{
            return prevPicture === 0 ? props.images.length - 1 : prevPicture - 1
        })
    }
    const nextImage = () => {
        setShownPicture((prevPicture)=>{
            return prevPicture === props.images.length - 1 ? 0 : prevPicture + 1
        })
    }
    return(
        <div>
            <button onClick={lastImage}>⏪</button>
            <img src={props.images[shownPicture]} alt="carousel-pic" />
            <button onClick={nextImage}>⏩</button>
        </div>
    )
}

export default Carousel