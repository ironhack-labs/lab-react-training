import './Carousel.css'
import React, { useState, useEffect } from 'react';


const Carousel = ({ images }) => {

    const [index, setIndex] = useState(0)
    const [picture, setPicture] = useState(images[index])

    const handleClickLeft = () => {
        setIndex(index - 1)
        index === 0 && setIndex(images.length - 1)
        setPicture(images[index])
    }

    const handleClickRight = () => {
        setIndex(index + 1)
        index === 3 && setIndex(0)
        setPicture(images[index])
    }


    return (
        <>
            <div>
                <img className='carouselImg' src={picture}></img>
            </div>
            <div>
                <button onClick={handleClickLeft}>Left</button>
                <button onClick={handleClickRight}>Right</button>
            </div >

        </>
    )
}

export default Carousel

// useState(0)
// src: la posición de array {img} State
// con el handleclik sumo resto valor
// returneo div con img
//div con 2 botones