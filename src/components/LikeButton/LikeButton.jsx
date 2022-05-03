import { useState } from 'react';
import './LikeButton.css'

function LikeButton() {

    const [likeValue, setLikeValue] = useState(0)

    return (
        <div className="Counter">

            <button onClick={() => setLikeValue(prevLikeVal => ++prevLikeVal)}> {likeValue} Likes </button>

        </div>
    )
}

export default LikeButton