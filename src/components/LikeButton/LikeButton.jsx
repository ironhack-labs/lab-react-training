import { useState } from 'react'
import './LikeButton.css'

const LikeButton = () => {

    const [counterLike, setCounterLike] = useState(0)

    const increment = () => {
        setCounterLike(counterLike + 1)
    }
    return (
        <div className="LikeButton">
            <button onClick={increment}> {counterLike} Likes</button>
        </div>
    )
}


export default LikeButton