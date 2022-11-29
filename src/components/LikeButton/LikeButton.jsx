import './LikeButton.css'
import { useState } from 'react'

const LikeButton = () => {

 const [likesValue, setLikesValue] = useState(0)

    const incrementLikes = () => {
        setLikesValue(likesValue + 1)
    }

    return (
       <div className='LikeButton'>
            <h3 onClick={incrementLikes}> {likesValue} likes</h3>
        </div>
    )
}

export default LikeButton