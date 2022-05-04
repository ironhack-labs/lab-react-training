import { useState } from "react"

function LikeButton() {
    
    const [buttonValue, setButtonValue] = useState(0)

    return (
        <div className="LikeButton">
            <button onClick={() => setButtonValue(prevButtonValue => ++prevButtonValue)}>{buttonValue} Likes</button>
        </div>
    )
}

export default LikeButton