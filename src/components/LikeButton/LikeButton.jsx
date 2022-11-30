import { useState } from 'react'
import './LikeButton.css'

const LikeButton = () => {

    const [likesValue, setLikesValue] = useState(0)

    const incrementLikes = () => {
        setLikesValue(likesValue + 1)
    }

    return (
        <article className='LikeButton'>

            <button onClick={incrementLikes}><h2>{likesValue} Likes</h2></button>

        </article>
    )
}

export default LikeButton