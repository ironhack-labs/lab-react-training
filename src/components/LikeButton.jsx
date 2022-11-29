import { useState } from 'react'
import './LikeButton.css'

const LikeButton = () => {

  const [counterValue, setCounterValue] = useState(0)

  const incrementCounter = () => {
    setCounterValue(counterValue + 1)

  }

  const arrayColors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red']

  return (


    <button className='LikeButton' onClick={incrementCounter} style={{
      backgroundColor: arrayColors[counterValue]
    }}>{counterValue} Likes</button>

  )
}

export default LikeButton