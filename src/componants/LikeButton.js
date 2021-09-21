import React from 'react'
import { useState } from 'react'



export default function LikeButton() {
    const [likes, likesCount] = useState(0);

    const colors = ['purple','blue','green','yellow','orange','red'];
    const randomColors = colors[Math.floor(Math.random() * colors.length)];
    const [currentColor, setColor] = useState(randomColors);
    

    
    const colorHandler = () => {
        setColor(currentColor => currentColor + 1)
    }

    const likesCounter = () => {
        likesCount(likes => likes + 1);
        colorHandler();
    }

    return (
        <div>
            <button style={{backgroundColor: randomColors}} onClick={likesCounter}>{likes} Likes</button>
        </div>
    )
}

