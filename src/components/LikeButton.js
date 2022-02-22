import { useState } from "react"

const LikeButton = () => {

    const [likes, setLikes] = useState(0)

    return (
        <article className="LikeButton">
            <button onClick={() => setLikes((prevsetLikes) => prevsetLikes + 1)}>{likes} Likes</button>
        </article>
    )
}


export default LikeButton