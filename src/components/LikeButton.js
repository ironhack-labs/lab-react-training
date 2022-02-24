import React, { useState } from 'react';
import './LikeButton.css';

function LikeButton() {

    const [counter, setCounter] = useState(0);

    return (
        <div className="LikeButton">
            <button onClick={ () => setCounter((prev) => prev + 1) }> {counter} Likes </button>
        </div>
    )
}

export default LikeButton;