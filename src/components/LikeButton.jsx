import { useState } from 'react'
import './LikeButton.css'

const LikeButton = () => {

    const [likButtonValue, setLikeButtonValue] = useState(0)

    const incrementLikeButton = () => {

        setLikeButtonValue(likButtonValue + 1)
    }

    // const decrementLikeButton = () => {

    //     setLikeButtonValue(likButtonValue - 1)

    // }

    return (
        <article >
            <button className='LikeButton' onClick={incrementLikeButton}> Likes: {likButtonValue} </button>
        </article>
    )
}

export default LikeButton


