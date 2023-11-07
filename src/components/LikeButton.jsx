import React, { useState } from "react";

function LikeButton()
{
    const [likes, setLikes] = useState(0)
    const [colorIndex, setColorIndex] = useState(0)
    const colors = ["purple", "blue", "green", "yellow", "orange", "red"]

    const handleClick = () => {
        setLikes(likes + 1)

        setColorIndex((colorIndex + 1) % colors.length)
    }

    return(
        <div className="likeContainer">
            <button 
                onClick={handleClick} 
                style={{ backgroundColor: colors[colorIndex]}}
            >{likes} {likes === 1 ? "like" : "likes"}</button>
        </div>
    )
}

export default LikeButton