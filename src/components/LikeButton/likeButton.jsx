import './likeButton.css'
import { useState } from 'react'


function LikeButton() {

    const [counterValue, setCounterValue] = useState(0)

    return (
        <div className="Counter">
            <button onClick={() => setCounterValue(prevCounterVal => ++prevCounterVal)}> <p> {counterValue} likes </p> </button>
        </div>
    );
}

export default LikeButton