import { useState } from "react";

const colors = ['purple','blue','green','yellow','orange','red'];

export default function LikeButton() {
    const [likesCount, updateLikesCount] =useState(0);
    const increaseLikes = () => {
        updateLikesCount(likesCount + 1);
    }
    
    const style = {
        backgroundColor : colors[likesCount%colors.length]
    }

    return (
        <button className="big-button" onClick={increaseLikes} style={style}>{likesCount} Likes</button>
    );
}