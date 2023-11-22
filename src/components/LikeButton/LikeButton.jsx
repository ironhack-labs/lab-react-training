import { useState } from "react"

const LikeButton = ({ }) => {

    const [likes, setLikes] = useState(0)

    const incrementLikes = () => {
        setLikes(likes + 1)
    }
    return (
        <button className="LikeButton" onClick={incrementLikes}>
            {likes} Likes
        </button>
    )
}

export default LikeButton