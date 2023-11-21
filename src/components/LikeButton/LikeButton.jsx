import { useState } from "react"
import './LikeButton.css'

const LikeButton = () => {

    const [count, setCount] = useState(0)

    const incrementCounter = () => {
        setCount(count + 1)
    }

    return (
        <>
            <button className="IncButton" onClick={incrementCounter}>{count} likes</button>
        </>
    )

}

export default LikeButton