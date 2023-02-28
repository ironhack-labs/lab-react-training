import { useState } from 'react'
import './LikeButton.css'

const LikeButton = () => {
    const [buttonValue, setButtonValue] = useState(0)
    const color = ['purple', 'blue', 'green', 'yellow', 'orange', 'red']
    const [colorValue, setColorValue] = useState(color[0])

    const incrementLike = () => {
        setButtonValue(buttonValue + 1)
        setColorValue(color[Math.floor(Math.random() * color.length)])
    }


    return (
        <div className="LikeButton">
            <button onClick={incrementLike} style={{ backgroundColor: colorValue }}>{buttonValue} Likes</button>
        </div>
    )
}

export default LikeButton