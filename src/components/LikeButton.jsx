import { useState } from 'react'
import './LikeButton.css'

const LikeButton = () => {

    const [likeValue, setlikeValue] = useState(0)

    const sumLikes = () => {

        setlikeValue(likeValue + 1)
    }
    return (
        <article className='LikeButton'>
            <button onClick={sumLikes}>{likeValue} Likes</button>
        </article>
    )
}

export default LikeButton