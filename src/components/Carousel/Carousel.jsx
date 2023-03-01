import { useState } from 'react'
import './Carousel.css'

const Carousel = ({ images }) => {

    const [index, setIndex] = useState(0)

    const showLeft = () => {
        if (index === 0) {
            setIndex(images.length - 1)
        } else {
            setIndex(index - 1)
        }
    }

    const showRight = () => {
        if (index === images.length - 1) {
            setIndex(0)
        } else {
            setIndex(index + 1)
        }
    }

    return (
        <>
            <button onClick={showLeft}>Left</button>
            <img src={images[index]} alt="Carrousel Image" />
            <button onClick={showRight}>Right</button>
        </>
    )
}

export default Carousel