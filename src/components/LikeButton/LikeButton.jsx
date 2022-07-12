import './LikeButton.css'
import { useState } from "react"

function LikeButton () {
    const [counterLikes, setCounterLikes] = useState(0)

    const incrementLikes = () => setCounterLikes(counterLikes + 1)

        return (
        <div className="LikeButton">
            <button onClick={incrementLikes}>{counterLikes} Likes</button>
        </div>
    )
}

export default LikeButton