import { useState } from 'react'
function LikeButton() {

    const [counterValue, setCounterValue] = useState(0)

    return (
        <div className="Counter">
            <h2>Counter</h2>

            <p>You clicked {counterValue} times</p>

            <button onClick={() => setCounterValue(prevCounterVal => --prevCounterVal)}> - </button>
            <button onClick={() => setCounterValue(prevCounterVal => ++prevCounterVal)}> + </button>
        </div>
    );
}


export default LikeButton