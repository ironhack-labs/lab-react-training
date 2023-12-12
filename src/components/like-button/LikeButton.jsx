import { useState } from "react"

function LikeButton() {
    const [count, setCount] = useState(0);
    const incrementLike = () => {
        setCount(count + 1)
    }
    return (
        <div>
            <button onClick={incrementLike}>{count} Like</button>
        </div>
    )
}

export default LikeButton

