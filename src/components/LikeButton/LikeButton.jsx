import { useState } from "react"

const LikeButton = () => {
    const [counterValue, setCounterValue] = useState(0)

    const handleclick = () => {
        setCounterValue(counterValue + 1)
    }

    return <button onClick={handleclick}>{counterValue} likes</button>

}

export default LikeButton