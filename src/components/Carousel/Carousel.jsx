import { useState } from 'react'
import './Carousel.css'

const Carousel = ({ images }) => {

    const [index, setIndex] = useState(0)
    let changeImageRight = () => {
        if (index === images.length - 1) { return setIndex(0) }
        else { setIndex(index + 1) }
    }

    let changeImageleft = () => {
        if (index === 0) { return setIndex(images.length - 1) }
        else { setIndex(index - 1) }

    }

    return <>
        <button onClick={changeImageleft}>Left</button>
        <img src={images[index]} alt="imagePerson" className="imagePerson" />
        <button onClick={changeImageRight}>Right</button>
    </>
}

export default Carousel