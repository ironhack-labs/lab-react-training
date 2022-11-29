import { useState } from 'react'

function Carousel(props) {
    const { images } = props



    const [counterValue, setCounterValue] = useState(1)

    const incrementCounter = () => {
        if (counterValue === images.length - 1) {
            setCounterValue(0)
        } else {
            setCounterValue(counterValue + 1)
        }
    }

    const decrementCounter = () => {
        if (counterValue === 0) {
            setCounterValue(images.length - 1)
        } else {
            setCounterValue(counterValue - 1)
        }

    }

    return (
        <article className='CounCartousel'>

            <button onClick={incrementCounter}>+</button>

            <img src={images[counterValue]}></img>

            <button onClick={decrementCounter}>-</button>

        </article>
    )
}
export default Carousel
