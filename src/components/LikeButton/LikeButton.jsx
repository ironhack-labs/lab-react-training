import { useState } from 'react'

const LikeButton = () => {
    
    const [counterValue, setCounterValue] = useState(0)

    const incrementCounterValue = () => {
        setCounterValue(counterValue + 1)
    }

    return (
        <div className="counter">

            <button onClick={incrementCounterValue}> {counterValue} Likes </button>

        </div>
    )

}

export default LikeButton