import './LikeButton.css';
import { useState } from 'react';

export default function LikeButton () {
    const [count, setCount] = useState(0);
    const colors = ['purple','blue','green','yellow','orange','red']
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    const handleClick = () => {
        setCount(count + 1);
    }

    const style = {
        backgroundColor: randomColor
    }

    return (
        <div className="like-button">
            <button style={style} onClick={handleClick}>
                {count} likes
            </button>
        </div>
    )

}
