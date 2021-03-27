import React, { useState } from 'react'
import CarouselImg from './CarouselImg'
import './Carousel.scss'
import { imgs } from '../../data/carousel'

const Carousel = () => {
    const [pic, setPic] = useState(0)

    const movePicL = () => {
        if (pic === imgs.length - 1) {
            setPic(0)
        } else {
            setPic(pic + 1)
        }
    }

    const movePicR = () => {
        if (pic <= 0) {
            setPic(imgs.length - 1)
        } else {
            setPic(pic - 1)
        }
    }

    return (
        <div className="Carousel">
            <button id="l" onClick={movePicL} ><i className="fas fa-angle-left"></i></button>
        
            <CarouselImg img={imgs[pic]}/>

            <button id="r" onClick={movePicR} ><i className="fas fa-chevron-right"></i></button>
        </div>
    )
}

export default Carousel
