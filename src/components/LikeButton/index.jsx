import { useState } from "react";

function LikeButton() {
const [likes, setLikes] = useState(0);
const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];
const [colorIndex, setColorIndex] = useState(0);

const handleClick = () => {
    setLikes(likes + 1);
    setColorIndex((colorIndex + 1) % colors.length);
};

return (
    <button
    style={{ backgroundColor: colors[colorIndex] }}
    onClick={handleClick}
    >
    {likes} Likes
    </button>
);
}

export default LikeButton;
