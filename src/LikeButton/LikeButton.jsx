import './LikeButton.css'
import { useState } from 'react'

const LikeButton = () => {

    const [counterValue, setCounterValue] = useState(0)
    const [counterValue1, setCounterValue1] = useState(0)

    return (

        <div className="Counter">
            <button onClick={() => setCounterValue1(prevCounterVal => --prevCounterVal)}> {counterValue1} Like </button>

            <button onClick={() => setCounterValue(prevCounterVal => ++prevCounterVal)}> {counterValue} Like </button>
        </div>
    )
}

export default LikeButton