import { useState } from "react"

const LikeButton = () => {

    const [like, setLike] = useState(0)

    const liked = () => {
        setLike(like + 1)
    }

    return (
        <button onClick={liked}>
            <p>{like} Likes</p>
        </button>
    )
}

export default LikeButton