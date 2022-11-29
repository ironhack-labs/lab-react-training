import './Carousel.css'
import { useState } from 'react'

const Carousel = props => {

  const { images } = props

  const [counterValue, setCounterValue] = useState(0)


  const incrementCounter = () => {
    setCounterValue(counterValue + 1)
  }

  const decrementCounter = () => {
    setCounterValue(counterValue - 1)
  }

  return (
    <div>
      <button onClick={decrementCounter}>Before Image</button>
      <img src={images[counterValue]} alt="" />
      <button onClick={incrementCounter}>Next Image</button>
    </div>
  )
}

export default Carousel