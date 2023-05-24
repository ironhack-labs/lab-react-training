import { useState } from "react";
import './LikeButton.css'

const LikeButton = () => {

    const [counterValue, setCounterValue] = useState(0)

    const handleCounter = () => {
        setCounterValue(counterValue + 1)
    }

    return (
        <div className="Like">

            <button onClick={(handleCounter)}>{counterValue} Likes</button>

        </div>
    )
}

export default LikeButton