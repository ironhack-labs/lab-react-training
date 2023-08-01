import { useState } from "react";

const LikeButton = () => {

    const colors=['purple','blue','green','yellow','orange','red']

    const [likes, setLikes] = useState(0);
    const [color, setColor] = useState(colors[0]);

    const style = {
        backgroundColor: `${color}`
    }

    const handleClick = () => {
        setColor(colors[Math.floor(Math.random() * colors.length)])
        setLikes(likes + 1)
    }
    
    return <button style={style} onClick={handleClick}>{likes} likes</button>
}

export default LikeButton;