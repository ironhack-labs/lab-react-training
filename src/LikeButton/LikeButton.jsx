import './LikeButton.css'
import { useState } from 'react'


function LikesCounter() {

    const [counterValue, setCounterValue] = useState(0)

    return (
        <div className='LikesCounter'>
            <button onClick={() => setCounterValue(prevCounterValue => ++prevCounterValue)}>{counterValue} likes</button>

        </div>
    )
}

export default LikesCounter