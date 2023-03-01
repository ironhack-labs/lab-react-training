import './LikeButton.css'
import { useState } from 'react'

const LikeButton = () => {
    const [counterValue, setCounterValue] = useState(0)

    const incrementCounter = () => {
        setCounterValue(counterValue + 1)
    }

    return (
        <div className='button'>
            <button onClick={incrementCounter}>{counterValue}Likes</button>
        </div>
    )
}

export default LikeButton