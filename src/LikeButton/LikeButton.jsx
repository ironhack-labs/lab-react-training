import './LikeButton.css'
import { useState } from 'react'


function LikeButton() {

    const [counterValue, setCounterValue] = useState(0)

    return (
        <div className="likeButton">
            <button onClick={() => setCounterValue(prevCounterVal => --prevCounterVal)}> {counterValue} Likes </button>
            <button onClick={() => setCounterValue(prevCounterVal => ++prevCounterVal)}> {counterValue} Likes </button>
        </div>
    );
}

export default LikeButton;
