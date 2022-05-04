import { useState } from 'react'
import './styles.css'

const LikeButton = () => {

    const [counterValue1, setCounterValue1] = useState(0)
    const [counterValue2, setCounterValue2] = useState(0)

    return (
        <>
            <button onClick={() => setCounterValue1(prevCounterVal => ++prevCounterVal)} className="btn-1">{counterValue1} likes</button>
            <button onClick={() => setCounterValue2(prevCounterVal => ++prevCounterVal)} className="btn-2">{counterValue2} likes</button>
        </>
    )
}

export default LikeButton