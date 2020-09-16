import React, { useState } from 'react'

const Carousel = ({ imgs }) => {
    let [index, setIndex] = useState(0)
    let [picture, setPicture] = useState(imgs[index])
    const leftButton = () => {
        if (index === 0) setIndex(imgs.length - 1)
        else setIndex(index - 1)
        setPicture(imgs[index])
    }

    const rightButton = () => {
        if (index === imgs.length - 1) setIndex(0)
        else setIndex(index + 1)
        setPicture(imgs[index])
    }
    return (
        <div>
            <button onClick={leftButton}>Previous picture</button>
            <img src={picture} alt="Pic" />
            <button onClick={rightButton}>Next picture</button>
        </div>
    )
}

export default Carousel
