import './LikeButton.css'
import { useState } from 'react'

function LikeButton() {

    const [counterValue, setCounterValue] = useState(0)
    

    return (
        <div >
            <h1>LikeButton</h1>
            <div className='button-likes'>
                <button onClick={() => setCounterValue(prevCounterVal => ++prevCounterVal)}>{counterValue} Likes</button>
            </div>
        </div>
    )
}

export default LikeButton
