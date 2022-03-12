//jshint esversion:8
import React, { useState } from "react";

export const LikeButton = ({ name, rating, img, car }) => {

    const [count, setCount] = useState(0);
    const colors = ['purple','blue','green','yellow','orange','red'];
    
    const likeBtn = () => {
        const backColor = document.querySelector('.Like-button');
        backColor.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        return setCount(count + 1);
    };
    
    return (
        <button className="Like-button" onClick={likeBtn}>{count} Likes</button>
    );
};