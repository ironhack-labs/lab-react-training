import { useState } from "react"
import './LikeButton.css'

const LikeButton = () => {

    const [likeCounterValue, setLikeCounterValue] = useState(0)
    const incrementCounter = () => {
        setLikeCounterValue(likeCounterValue + 1)
    }

    const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red']
    let number = Math.floor(Math.random() * colors.length)

    const backgroundStyle = {
        backgroundColor: colors[number]
    }

    return (
        <div className="counter">
            <button onClick={incrementCounter} style={backgroundStyle}> {likeCounterValue} likes </button>
        </div>
    );
}

export default LikeButton