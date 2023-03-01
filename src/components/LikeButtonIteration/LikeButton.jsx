import { useState } from "react";
import "./LikeButton.css"

const LikeButton = () => {
    const [likeValue, setlikeValue] = useState(0)

    const incrementLike = () => {
        setlikeValue(likeValue + 1)
    }

    return (
        <button className="likeButton" onClick={incrementLike}>{likeValue} Like</button>
    )
}

export default LikeButton