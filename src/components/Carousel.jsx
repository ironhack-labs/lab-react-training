import { useState } from 'react'
import './Carousel.css'

const Carousel = (props) => {
    const { images } = props
    const [showCarousel, setShowCarousel] = useState(0)

    const right = () => {
        setShowCarousel(showCarousel + 1)
    }
    const left = () => {
        setShowCarousel(showCarousel - 1)
    }
    return (
        <article className='Carousel'>
            <button onClick={right}>Right</button>
            <img src={images[showCarousel]} alt="" />
            <button onClick={left}>Left</button>
        </article>
    )
}

export default Carousel

