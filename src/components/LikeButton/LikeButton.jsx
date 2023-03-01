import { useState } from 'react'
import './LikeButton.css'

const LikeButton = () => {

    const [counterValue, setCounterValue] = useState(0)

    const incrementCounter = () => {
        setCounterValue(counterValue + 1)
    }

    return (

        <button className='Button' onClick={incrementCounter}> {counterValue} Likes</button>

    )
}

export default LikeButton