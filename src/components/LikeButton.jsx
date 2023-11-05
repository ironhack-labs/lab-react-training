import "../styles/LikeButton.css"
import { useState } from "react"

export default function LikeButton() {
    const [likeCount, setLikeCount] = useState(0)
    const [bgnColor, setBgnColor] = useState('purple')
    const colors = ['red', 'yellow', 'green', 'blue', 'teal', 'black', 'pink']

    function clicker(likeCount) {
        setLikeCount(likeCount+1)
        setBgnColor(colors[Math.floor(Math.random() * colors.length-1)])
    }
    return(
        <div className="LikeButton">
            <button style={{backgroundColor: bgnColor}} onClick={()=>clicker(likeCount)}>{likeCount} Likes</button>
        </div>
    )
}

