import { useState } from "react"

function LikeButton() {

    const [count, setCount] = useState(0)

    const incrementLikes = () => {
        setCount(count + 1)
    }

    return (
        <button onClick={incrementLikes}>{count === 1 ? "1 like" : `${count} likes`}</button>
    )
}

export default LikeButton