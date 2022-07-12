import React from "react"; 
import { useState } from "react"; 

export default function LikeButton() {
    const [count, setCount] = useState(0); 
    function handleClick() {
        setCount(count + 1);
    };

    return (
        <button onClick={handleClick}>{count} Likes</button>
    )
}