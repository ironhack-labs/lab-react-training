import React, { useState } from 'react';

function LikeButton(props) {

    let getRandColor = () => {
        const colors = ['purple','blue','green','yellow','orange','red'];
        return colors[Math.round(Math.random()*colors.length )]
    }

    const [likes, setlikes] = useState(() => 0);
    const [color, setColor] = useState(() => getRandColor());
    const [moreLikes, setMoreLikes] = useState(() => 0);

    const style = {
        backgroundColor: color,
        padding: '7px 20px',
        border: 'none',
        borderRadius: '3px',
        fontWeight: 'bold'
    }

    const updateLikeButton = () => {
        setlikes(likes+1)
        setColor(getRandColor())
    }

    return (
        <div>
            <button style={style} onClick={updateLikeButton}>{likes} Likes</button>
            <div className="plus-minus-button">
            <button onClick={() => {setMoreLikes( moreLikes-1)}}>-</button>
            <span>{moreLikes} Likes</span>
            <button onClick={() => {setMoreLikes(moreLikes+1)}}>+</button>
            </div>

        </div>
    )
}

export default LikeButton;