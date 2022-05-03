import { useState } from 'react'

const Carousel = ({ images }) => {

    const [picValue, setPicValue] = useState(0)

    let newValue = picValue + 1

    let moveLeft = () => {
        setPicValue(newValue)
    }


    return (
        <>
            <img src={images[picValue]} alt='imagen'></img>
            <button onClick={moveLeft}> Left </button>
        </>
    )
}

export default Carousel
