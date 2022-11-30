import { useState } from 'react'
import './LikeButton.css'
const LikeButton = () => {

    const [LikeButton, setLikeButton] = useState(0)
    const incrementCounter = () => {
        setLikeButton(LikeButton + 1)
    }
    const decrementCounter = () => {
        setLikeButton(LikeButton - 1)
    }
    return (
        <article className='Like'>
            <button onClick={incrementCounter}>{LikeButton} Likes</button>
            <button onClick={decrementCounter}>{LikeButton} Likes</button>
        </article>
    )
}

export default LikeButton


