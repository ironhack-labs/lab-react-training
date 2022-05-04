import { useState } from 'react'

function LikeButton() {

    const [likeValue, setLikeValue] = useState(0)

    return (
        <div className="LikeButton">
            <button onClick={() => setLikeValue(prevLikeVal => ++prevLikeVal)}> {likeValue} LIKES </button>
        </div>
    );
}

export default LikeButton;