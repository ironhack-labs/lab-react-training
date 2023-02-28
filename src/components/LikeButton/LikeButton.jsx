import { useState } from 'react'
import './LikeButton.css'

const LikeButton = () => {

    const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red']

    const styleButton = {
        backgroundColor: colors[Math.floor(Math.random() * colors.length)]
    }

    const [likedCount, setLikedCount] = useState(0)

    const likeButton = () => {
        const result = likedCount + 1
        setLikedCount(result)
    }

    return (
        <button className='LikeButton' onClick={likeButton} style={styleButton}>{likedCount} likes</button>
    )
}

export default LikeButton