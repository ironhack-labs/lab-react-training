import { useState } from 'react'

const LikeButton = () => {

    const [likesValue, setLikesValue] = useState(0)


    return (
        <div className="Likes">
            <button onClick={() => setLikesValue(prevLikesVal => ++prevLikesVal)}> {likesValue} Likes </button>
        </div>
    )
    
}

export default LikeButton