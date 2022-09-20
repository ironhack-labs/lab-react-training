import { useState } from 'react'

const LikeButton = (props) => {
    const [likes, setLikes] = useState(0)

    const updateLike = () => {
        let newLike = likes + 1
        setLikes(newLike)
    }

    return (
        <div className="card-person">
            {<button onClick={updateLike}>{likes} Likes</button>}
        </div>
    )
}

export default LikeButton;