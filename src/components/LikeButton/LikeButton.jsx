import './LikeButton.css'
import { useState } from "react"

function LikeButton() {

    const [counterValue, setCounterValue] = useState(0)

    const incrementValue = () => setCounterValue(counterValue + 1)

    return (

        <button onClick={incrementValue}>{counterValue} Likes</button>

    )
}

export default LikeButton