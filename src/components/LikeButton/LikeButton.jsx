import './LikeButton.css'
import { useState } from 'react'

const LikeButton = () => {

    const [counterValue, setCounterValue] = useState(0)
    const [colorIndex, setColorIndex] = useState(0)
    const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red']

    const handleClicker = () => {
        setCounterValue(counterValue + 1)
        setColorIndex((colorIndex + 1) % colors.length)
    }

    const backgroundColor = colors[colorIndex]

    return (
        <section className="LikeButton">
            <button onClick={(handleClicker)} className="likeButton" style={{ backgroundColor }}>{counterValue} likes</button>
        </section>
    )
}

export default LikeButton