import './LikeButton.css'
import { useState } from "react"


const LikeButton = () => {

    const [likeCounter, setLikeCounter] = useState(0)
    const incrementCounter = () => {
        setLikeCounter(likeCounter + 1)
    }

    const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red']
    let number = Math.floor(Math.random() * colors.length)

    const backgroundStyle = {
        backgroundColor: colors[number]
    }

    return (
        <div className="contador">
            <button onClick={incrementCounter} style={backgroundStyle}> {likeCounter} likes </button>
        </div>
    );
}

export default LikeButton
