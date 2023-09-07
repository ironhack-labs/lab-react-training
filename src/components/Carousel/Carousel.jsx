import '../App.css'
import { useState } from "react"

const Carousel = ({ images }) => {

    const [imgIndex, setImgIndex] = useState(0)

    const moveLeft = () => {
        if (imgIndex === 0) { setImgIndex(images.length - 1) }
        else { setImgIndex(imgIndex - 1) }
    }

    const moveRight = () => {
        if (imgIndex === images.length - 1) { setImgIndex(0) }
        else { setImgIndex(imgIndex + 1) }
    }

    return (
        <>
            <button onClick={moveLeft}>left</button>
            <img className="Carousel" src={images[imgIndex]} alt="Carousel" />
            <button onClick={moveRight}>right</button>
        </>
    )
}


export default Carousel