import { useState } from 'react'

const Carousel = ({ images }) => {

    const [showCarousel, setShowCarousel] = useState(images[0])

    let index = 0

    const right = () => {
        index++
        setShowCarousel(images[index])
        if (index >= images.length - 1) {
            setShowCarousel(images[0])
        }
    }

    const left = () => {
        index--
        setShowCarousel(images[index])
        if (index < 0) {
            setShowCarousel(images[3])
        }
    }

    return (

        <div>
            <button onClick={left}>Left</button>
            <img src={showCarousel} />
            <button onClick={right}>Right</button>
        </div>
    )

}

export default Carousel