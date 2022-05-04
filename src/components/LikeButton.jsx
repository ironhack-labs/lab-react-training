import { useState } from 'react'

const LikeButton = () => {

    const [counterValue, setCounterValue] = useState(0)

    return (
        <div className="Counter">
            <button onClick={() => setCounterValue(prevCounterVal => ++prevCounterVal)}>{counterValue} Likes</button>
        </div>
    );
}
export default LikeButton