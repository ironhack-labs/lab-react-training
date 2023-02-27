import { useState } from 'react'

function LikeButton() {

    const [likes, setLikes] = useState(0);

    const addLike = () => {
        setLikes(likes + 1);
    }

    return (
        <div>

            <button onClick={addLike}>{likes} Likes</button>

        </div>
    )
}

export default LikeButton;