import { useState } from "react";

const LikeButton = () => {
    const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];
    const [count, setCount] = useState(0);
    const [color, setColor] = useState(colors[0]);

    const handleClick = () => {
        setCount(count + 1);
        setColor(colors[Math.floor(Math.random() * colors.length)]);
    }

    return (
        <div>
            <button onClick={handleClick} style={{ backgroundColor: color }}>{count} Likes</button>
        </div>
    );
}

export default LikeButton;