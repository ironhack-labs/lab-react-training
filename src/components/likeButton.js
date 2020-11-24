import React, { useState } from "react";



const LikeButton = (props) => {

    const arrColor = ['salmon', 'purple', 'teal', 'red'];
  
    const [count, setCount] = useState(0);
    const [colors, setColors] = useState('green');
    const onClickHandler = () => {
        setCount(count + 1) 
        setColors(arrColor[Math.floor(Math.random() * arrColor.length)])
    };

    return (
    <div className="color-btn">
        <button onClick={onClickHandler} style={{ backgroundColor: `${colors}` }}>{count} Likes</button>
    </div>
    )
}

export default LikeButton;