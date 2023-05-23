import './LikeButton.css'
import { useState } from "react"

const LikeButton = () => {
    const backgroundArr = ['purple', 'blue', 'green', 'yellow', 'orange', 'red']

    const [likesValue, setLikesValue] = useState(0)
    const [backgroundValue, setBackgroundValue] = useState("")

    const handleCounter = () => {
        setLikesValue(likesValue + 1)
        const randomBackground = backgroundArr[Math.floor(Math.random() * 6)]
        setBackgroundValue(randomBackground)
    }

    return (
        <div className='LikeButton'>
            <button onClick={handleCounter} style={{ backgroundColor: backgroundValue }}>{likesValue} Likes </button>
        </div>

    )

}

export default LikeButton