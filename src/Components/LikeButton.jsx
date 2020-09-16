import React, { useState } from "react";

const LikeButton = () => {
    let [clickCount, setClickCount] = useState(0);

    const handleClickIncrement = () => {
        setClickCount(clickCount + 1)
    }

    return (
        <div>
            <button onClick={handleClickIncrement}>{clickCount} Likes</button>
        </div>
    )
}

export default LikeButton
