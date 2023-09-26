import { useState } from "react";
function LikeButton() {
    const bgColors = ["purple", "blue", "green", "yellow", "orange", "red"];
    const textColors = ["white", "white", "white", "black", "black", "white"];
    const [likes, setLikes] = useState(0);
    const colorsIndex = likes - Math.floor(likes / 6) * 6;
    return (
        <button className="m-1" style={{ color: textColors[colorsIndex], backgroundColor: bgColors[colorsIndex] }} onClick={() => {
            setLikes(likes + 1);
        }}>{ likes } Likes</button>
    )
}

export default LikeButton;