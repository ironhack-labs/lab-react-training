import React, { useState } from 'react';
import './LikeButton.css';

function LikeButton() {

    const colorsArray = ['purple','blue','green','yellow','orange','red'];

    const [counter, setCounter] = useState(0);
    const [bgColor, setBgColor] = useState(colorsArray[0])

    const clickHandler = () => {

        setBgColor((prev) => {
            const index = colorsArray.indexOf(prev);
            return (index == colorsArray.length - 1) ? colorsArray[0] : colorsArray[index + 1];
        });
        setCounter((prev) => prev + 1);
    }

    return (
        <div className="LikeButton">
            <button onClick={ clickHandler } style={{backgroundColor: bgColor}}> {counter} Likes </button>
        </div>
    )
}

export default LikeButton;