import { useState } from 'react'
import './LikeButton.css'


const LikeButton = () => {

    const [counterValue, setCounterValue] = useState(0)

    const incrementCounterValue = () => {
        setCounterValue(counterValue + 1)
    }

    return (

        <div className="likebutton">

            <button onClick={incrementCounterValue}>{counterValue} likes</button>

        </div>
    )
}

export default LikeButton
