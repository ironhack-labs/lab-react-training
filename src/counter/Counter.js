import { useState } from 'react'

function LikeButton() {

    const [counterValue, setCounterValue] = useState(0)

    return (
        <div>
            <h2>Counter</h2>
            <button onClick={() => setCounterValue(previousCounterValue => ++previousCounterValue)}>{counterValue} Likes</button>
        </div>
    )

}

export default LikeButton