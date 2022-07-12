import { useState } from "react"

function LikeButton() {
    const [likesValue, setLikesValue] = useState(0)

    const incrementValue = () => setLikesValue(likesValue + 1)

    return (
        <>
            <button onClick={incrementValue}>{likesValue} Likes</button>
        </>
    )
}

export default LikeButton