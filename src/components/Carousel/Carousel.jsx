import { useState } from 'react'
import './../Carousel/Carousel.css'

const Carousel = ({ images }) => {

    const [imageSrc, setImageSrc] = useState(images[0])
    const [direction, setDirection] = useState(null)

    const newImages = [...images]
    const index = newImages.length

    const toLeft = () => {
        setDirection('left')
        if (newImages.indexOf(imageSrc) == 0) {
            setImageSrc(newImages[3])

        }
        else { setImageSrc(newImages[(newImages.indexOf(imageSrc) - 1)]) }

    }

    const toRight = () => {
        setDirection('right')
        if (newImages.indexOf(imageSrc) == (index - 1)) {
            setImageSrc(newImages[0])
        }
        else { setImageSrc(newImages[(newImages.indexOf(imageSrc) + 1)]) }
    }

    return (
        <div className="Carousel">
            <button onClick={toLeft}>Left</button>
            <img src={imageSrc} alt="" />
            <button onClick={toRight}>Right</button>
        </div>
    )
}

export default Carousel