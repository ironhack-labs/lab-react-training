import React, { useState } from 'react';

export default function LikeButton() {

    const [index, setIndex] = useState(0);

    const colors = ['purple','blue','green','yellow','orange','red'];

    const buttonStyle = {
        backgroundColor: colors[index > 4 ? 5 : index]
    }

    function increment() {
        setIndex(index + 1);
    }

    return (
        <div className='likeCont'>
            <button style={buttonStyle} onClick={increment}>
            {index} Likes
            </button>
        </div>
    )

}