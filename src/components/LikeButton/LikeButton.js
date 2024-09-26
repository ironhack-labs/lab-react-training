import { useState } from "react"
import './LikeButton.css'


const LikeButton = () => {

    const [counterValue, setCounterValue] = useState(0)
    const [backgroundColors, setBackgroundColor] = useState([0])
    const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red']

    const handleLikeButton = () => {
        setCounterValue(counterValue + 1)
        setBackgroundColor((backgroundColors + 1) % colors.length)
    }

    const colorChange = {
        backgroundColor: colors[backgroundColors]
    }

    return (
        <section className="likebutton">
            <button onClick={(handleLikeButton)} style={colorChange}>LIKES {counterValue}</button>
        </section >
    )
}

export default LikeButton



