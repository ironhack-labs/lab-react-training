import { useState } from 'react'
import './LikeButton.css'

const LikeButton = () => {
    const [likesCount, setLikesCount] = useState(0)

    const incrementLikesCount = () => {
        setLikesCount(likesCount + 1)
    }

    return (
        <div >

            <button className="likesCount" onClick={incrementLikesCount}> {likesCount} likes </button>
        </div>
    )

}

export default LikeButton