import { useState } from "react"

function LikeButton() {

    const [likeButtonValue, setLikeButtonValue] = useState(0)

    return (
        <div className="likeButton">
            <button onClick={() => setLikeButtonValue((prevValue) => prevValue + 1)}>
                {`${likeButtonValue} Likes`}
            </button>
        </div>
    )
}

export default LikeButton