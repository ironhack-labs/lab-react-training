import './LikeButton.css'
import { useState } from "react"


const LikeButton = () => {

    const [counterValue, setCounterValue] = useState(0)

    const incrementValue = () => setCounterValue(counterValue + 1)

    // const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red']

    return (
        <div className="Counter">
            <button onClick={incrementValue}>{counterValue} Likes  </button>
        </div>
    )
}


export default LikeButton


