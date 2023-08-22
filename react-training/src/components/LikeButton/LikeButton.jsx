import './LikeButton.css'
import { useState } from 'react'

const LikeButton = () => {

    const [likeCounter, setLikeCounter] = useState(0)

    const incrementLikeCounterValue = () => {
        setLikeCounter(likeCounter + 1)
    }

    return (
        <div className="counter">
            <button onClick={incrementLikeCounterValue}>{likeCounter} Likes</button>
        </div>
    )
}

export default LikeButton