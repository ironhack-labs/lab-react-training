import { useState } from 'react'
import './Likebutton.css'

const LikeButton = () => {

    const [counterLikes, setCounterLikes] = useState(0)

    const incrementLikes = () => {
        setCounterLikes(counterLikes + 1)
    }
    return (
        <article>

            <button onClick={incrementLikes}>Likes {counterLikes}</button>
        </article>
    )
}




export default LikeButton


