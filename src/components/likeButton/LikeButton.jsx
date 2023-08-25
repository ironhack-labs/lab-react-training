import './LikeButton.css'
import { useState } from 'react'

const LikeButton = () => {
    const [likeButtonValue, setlikeButtonValue] = useState(0)
    const incrementLikeButtonValue = () => {
        setlikeButtonValue(likeButtonValue + 1)
    }


    return (
        <div className="LikeButton">


            <button onClick={incrementLikeButtonValue}>{likeButtonValue} Likes</button>

        </div>
    )
}
export default LikeButton