/* Create a LikeButton component that displays a button with the initial text "0 Likes". With each click, the number of Likes should increase.

As a bonus, implement the background color change on each click. You can use the following array of colors: ['purple','blue','green','yellow','orange','red'] */
import React, { useState } from 'react';

function LikeButton() {
    const [counter, setCounter] = useState(0);
    const [color, setColor] = useState('purple');
    
    const colors = ['purple','blue','green','yellow','orange','red'];
    
    const handleClick = () => {
        setCounter(counter + 1);
        setColor(colors[Math.floor(Math.random() * colors.length)]);
    };
    
    return (
        <button style={{backgroundColor: color}} onClick={handleClick}>{counter} Likes</button>
    );
}

export default LikeButton;
