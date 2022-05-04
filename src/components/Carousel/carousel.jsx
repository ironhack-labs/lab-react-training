import './carousel.css'
import { useState } from 'react'

const Carousel = ({ images }) => {

    const [carouselValue, setCarouselValue] = useState(0)

    return (
        <div className="Counter">

            <button onClick={() => setCarouselValue(prevCounterVal => prevCounterVal < 3 ? ++prevCounterVal : prevCounterVal = 0)}>  left</button>
            <img src={images[carouselValue]} alt="" />
            <button onClick={() => setCarouselValue(prevCounterVal => prevCounterVal > 0 ? --prevCounterVal : prevCounterVal = 3)}> right </button>

        </div>
    )
}


export default Carousel