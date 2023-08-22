import './Carousel.css'
import { useState } from 'react'

const Carousel = ({ images }) => {

    const [image, setImage] = useState(0)


    const left = () => {
        setImage(image - 1)
    }

    const right = () => {
        setImage(image + 1)
    }

    return (
        <>
            <button onClick={left}> left </button>

            <img src={images[image]} alt="idpicture" />

            <button onClick={right}> right </button>
        </>
    )

}

export default Carousel