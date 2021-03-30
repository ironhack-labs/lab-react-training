import React, { useState } from 'react'
import './LikeButton.scss'

const LikeButton = () => {

    const randomColor = () => ['purple','blue','green','yellow','orange','red'][Math.floor(Math.random() * (5 - 0)) + 0]

    const [likes, setLikes] = useState(0)
    const [color, setColor] = useState(randomColor())

    const handleLikes = () => {
        setLikes(likes + 1)
        setColor(randomColor())
    }

    return (
        <button onClick={handleLikes} className="LikeButton" style={{ backgroundColor: color }}>
            Likes {likes}
        </button>
    )
}

export default LikeButton
