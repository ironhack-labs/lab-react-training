import React, { useState } from 'react';

function SetLikeButton () {
    const colorsArray = ['purple','blue','green','yellow','orange','red'];
    const [count, setCount] = useState(0);
    const [color, setColor] = useState(colorsArray[0]);

    const clickButton = () => {
        setCount((counter) => (counter + 1))

        setColor(() => (colorsArray[0] + 1))

    };

    return (
        <div className='SetLikeButton'>
            <button onClick={clickButton} style={{ backgroundColor: `${color}`}}> {count} likes</button>
        </div>
    );
}

export default SetLikeButton;