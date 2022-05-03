import './Carousel.css'
import { useState } from 'react'

const Carousel = ({ images }) => {

    const [indexValue, setindexValue] = useState(0)

    const nextImg = () => {
        setindexValue(prevIdx => prevIdx > 0 ? --prevIdx : prevIdx = 3)
    }

    const previousImg = () => {
        setindexValue(prevIdx => prevIdx < 3 ? ++prevIdx : prevIdx = 0)

    }

    return (
        <>
            <button onClick={nextImg}>Left</button>
            <img src={images[indexValue]}></img>
            <button onClick={previousImg}>Right</button>
        </>
    )
}

export default Carousel