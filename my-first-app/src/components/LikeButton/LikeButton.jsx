import { useState } from "react"
import "./LikeButton.css"
const LikeButton = () => {

    const [like, setLike] = useState(0)

    const incrementLike = () => {
        setLike(like + 1)
    }

    return (
        <div className="like">
            <button onClick={incrementLike}>Like {like}</button>
        </div>

    )

}

export default LikeButton