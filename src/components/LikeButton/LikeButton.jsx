import { useState } from "react"


const LikeButton = () => {

    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count + 1)
    }

    const drecrement = () => {
        setCount(count - 1)
    }

    return (
        <div className="Count">
            <h1> {count} likes</h1>
            <button onClick={increment}> + </button>
            <button onClick={drecrement}> - </button>
        </div>
    )
}

export default LikeButton