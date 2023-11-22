
import { useState } from "react"

const LikeButton = ({ }) => {

    const [like, setLike] = useState(0)

    const incrementCounter = () => {
        setLike(like + 1)

    }

    return (
        <div className="likeButton">
            <button onClick={incrementCounter}> {like} likes </button>
        </div>
    )

}

export default LikeButton