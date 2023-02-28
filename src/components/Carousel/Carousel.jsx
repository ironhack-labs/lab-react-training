import { useState } from "react"
import './Carousel.css'

const Carousel = ({ images }) => {

    const [image, setImage] = useState(images[0])

    let index = 0

    const imageLeft = () => {
        index = (index + 1) % images.length
        setImage(images[index])
    }

    const imageRight = () => {
        index = (index - 1 + images.length) % images.length
        setImage(images[index])
    }

    return (
        <div className='Carousel'>
            <button onClick={imageLeft}>LEFT</button>
            <img src={image} alt="" />
            <button onClick={imageRight}>RIGHT</button>
        </div>
    )
}

export default Carousel