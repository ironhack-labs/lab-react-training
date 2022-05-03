import { useState } from 'react'

const LikeButton = () => {

    const [likesValue, setLikesValue] = useState(0)

    return (
        <div className="LikeButton">
            <button onClick={() => setLikesValue(prevLikesVal => ++prevLikesVal)}> {likesValue} likes </button>
        </div>
    )
}

export default LikeButton


