import { useState } from 'react'
import './Carousel.css'

const Carousel = ({ images }) => {

    const [counterValue, setCounterValue] = useState(0)

    const incrementCounterValue = () => {
        counterValue > 2 ? setCounterValue(counterValue - 3) : setCounterValue(counterValue + 1)
    }

    const decrementCounterValue = () => {
        counterValue < 1 ? setCounterValue(counterValue + 3) : setCounterValue(counterValue - 1)
    }

    return (
        <div className="carousel">

            <button onClick={decrementCounterValue}> - </button>
            <img src={images[counterValue]} alt="" />
            <button onClick={incrementCounterValue}> + </button>

        </div>
    )
}

export default Carousel