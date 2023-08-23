import { useState } from 'react'
import './LikeButton.css'

const initialValue = 0

const LikeButton = () => {

    const [counterValue, setCounterValue] = useState(initialValue)

    const incrementCounterValue = () => {
        setCounterValue(counterValue + 1)
    }

    return (
        <div className="LikeButton">
            <button onClick={incrementCounterValue}>{counterValue} Likes</button>
        </div>
    )
}

export default LikeButton