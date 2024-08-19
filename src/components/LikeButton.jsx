import { useState } from "react"

/* eslint-disable react/prop-types */
function LikeButton() {
    const [ likes, setLikes ] = useState(0)
    const [currentColor, setCurrentColor] = useState(null);
    const colors = ["purple", "blue", "green", "yellow", "orange", "red"]

    function updateLikeCounter(event) {
        setLikes(prevLikes => prevLikes + 1)
        let newColor;
        do {
            const index = Math.floor(Math.random() * colors.length);
            newColor = colors[index];
        } while (newColor === currentColor);
        event.target.style.backgroundColor = newColor
        setCurrentColor(newColor);
    }

    return (
        <button onClick={updateLikeCounter}>{likes} Likes</button>
    )
}

export default LikeButton