import { useState } from 'react'
import './Carousel.css'
const Carousel = ({ images }) => {

    const [picture, setPicture] = useState(0)
    const [frame, setFrame] = useState(images[picture])

    const handleLeft = () => {
        setPicture(picture - 1)
        picture === 0 && setPicture(images.length - 1)
        setFrame(images[picture])
    }

    const handleRight = () => {
        setPicture(picture + 1)
        picture === images.length - 1 && setPicture(0)
        setFrame(images[picture])
    }

    return (
        <div className="carousel">
            <button className="buttonCarousel" onClick={handleLeft}>←</button>
            <img src={frame} alt="picture" />
            <button className="buttonCarousel" onClick={handleRight}>→</button>
        </div>
    );
}

export default Carousel


