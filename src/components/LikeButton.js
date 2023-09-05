import React, {useState} from "react";

const LikeButton = () => {
    const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];
    const [likes, setLikes] = useState(0);
    const [colorIndex, setColorIndex] = useState(0);

    const handleLike = () => {
        setLikes((prevLike) => prevLike + 1);
        setColorIndex((prevColor) => (prevColor + 1) % colors.length);
    };

    const buttonStyle = {
        backgroundColor: colors[colorIndex],
        color: 'white',
        padding: '10px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    }

    return (
        <div>
            <button style={buttonStyle} onClick={handleLike}>
                {likes} {likes === 1 ? 'Like' : 'Likes'}
            </button>
        </div>
    )
};

export default LikeButton;