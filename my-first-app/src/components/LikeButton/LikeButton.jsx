import { useState } from "react"
import "./LikeButton.css"

const LikeButton = () => {
    const [like, setLike] = useState(0)

    const incrementCounter = () => {
        setLike(like + 1)
    }
    return (
        <div className="LikeButton">
            <h2>{like}</h2>
            <button onClick={incrementCounter}> Like + </button>
        </div>
    )
}

export default LikeButton