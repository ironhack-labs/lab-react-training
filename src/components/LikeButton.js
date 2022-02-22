import { useState } from 'react';

function LikeButton() {
    const colorArr = ['purple', 'blue', 'green', 'yellow', 'orange', 'red']
    const [likes, setLikes] = useState(0)
    const [color, setColor] = useState(colorArr)

    const likeHandler = () => {
        setLikes(likes => likes + 1)
    }
    const colorHandler = () => {
        setColor(color => color)
    }
    return (
        <button style={{ backgroundColor: color[Math.floor(Math.random() * color.length)] }} onClick={() => { likeHandler(); colorHandler() }} > {likes} Likes</button >
    )

}

// How do I keep the loop of colors going?

export default LikeButton;