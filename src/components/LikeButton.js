import React from 'react';
import { useState } from 'react';

function LikeButton() {
    const [likes, setCount] = useState(0);

    const randomColor = () => {
        const colors = ['purple','blue','green','yellow','orange','red'];
        let randomIndex = Math.floor(Math.random() * colors.length);
        return colors[randomIndex];
    }
    const [color, setColor] = useState(randomColor());


    const clickHandler = () => {
        setCount(likes + 1)
        setColor(color => randomColor())
    }
    return(
        <button className="buttonColor" onClick={clickHandler} style={{backgroundColor: color}}>{likes} Likes</button>
    )
}

export default LikeButton;