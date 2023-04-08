import { useState } from "react";

function LikeButton() {
    const [count, setCount] = useState(0)
    const [colorIndex, setColorIndex] = useState(0)

    const colors = ['purple','blue','green','yellow','orange','red']
    
    const currentColor = colors[colorIndex % colors.length]


    function handleClick() {
        setCount(prev => prev + 1)
        setColorIndex(prev => prev + 1)
    }


    const style = {backgroundColor: currentColor}

    return (
        <button className="likeButton" style={style} onClick={handleClick}>{count} Likes</button>
    )
}

export default LikeButton;