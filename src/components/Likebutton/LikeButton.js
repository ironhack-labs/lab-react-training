import React, { useState } from 'react'

const LikeButton = () => {
    const [clickCount, setClickCount] = useState(0);
    const [backColor, setBackColor] = useState('purple');

    const eventHandler = () => {
        const backgrounds = ['purple','blue','green','yellow','orange','red'];
        let newBack = backColor

        let newLikes = clickCount + 1;
        setClickCount(newLikes)
    };

    return (
        <button onClick={eventHandler}>{clickCount} likes</button>
    )

}

export default LikeButton;