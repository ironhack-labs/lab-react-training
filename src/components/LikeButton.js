import React, { useState } from 'react'

function LikeButton() {
    const [likes, setLikes] = useState(0)
    const [color, setColor] = useState(0)

    const colors = ['purple','blue','green','yellow','orange','red']
    
    const handleLike = () => {
        setLikes(likes + 1)
        setColor(color + 1)
    }

    return (
        <div>
            <button style={{backgroundColor: colors[color%6]}} onClick={() => handleLike()}>{likes} Likes</button>
        </div>
    )
}

export default LikeButton
