import React, { useState } from 'react';

const LikeButton = () => {
    const [likes, setLikes] = useState(0);
    const [colorIndex, setColorIndex] = useState(0);
    const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];

    const handleLike = () => {
        setLikes(likes + 1);
        setColorIndex((colorIndex + 1) % colors.length);
    };

    const buttonStyle = {
        backgroundColor: colors[colorIndex],
        padding: '20px',
        borderRadius: '15px',
        color: 'white',
    };

    return (
        <button style={buttonStyle} onClick={handleLike}>
            {likes} Likes
        </button>
    );
};

export default LikeButton;
