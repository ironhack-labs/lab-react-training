import { useState } from "react"

const LikeButton = () => {

    const [like, setLikes] = useState(0)

    const meGusta = () => {
        setLikes(like + 1)
    }

    return (
        <button onClick={meGusta}>{like} Likes</button>
    )
}

export default LikeButton