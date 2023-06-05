import React, { useState } from 'react';

function LikeButton() {
    const [counter, setCounter] = useState(0);

    const colors = ['purple','blue','green','yellow','orange','red'];
    const [colorIndex, setColorIndex] = useState(0);

    const handleClick = () => {
        setCounter(counter + 1);
        setColorIndex((colorIndex + 1) % colors.length);
    }

    return (
        <button className="likeButton" onClick={handleClick} style={{backgroundColor: colors[colorIndex]}}>
            {counter} Likes
        </button>
    );
}

export default LikeButton;