import './LikeButton.css'
import { useState } from "react"

const LikeButton = () => {

    const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red']

    const [counter, setCounter] = useState(0)
    const [colorIndex, setColorIndex] = useState(0)

    const handleClick = () => {
        setCounter(counter + 1)
        colorIndex < colors.length ? setColorIndex(colorIndex + 1) : setColorIndex(0)
    }


    return (
        <button className="likeButton" onClick={handleClick} style={{ backgroundColor: colors[colorIndex] }}> {counter} likes </button>
    )
}

export default LikeButton