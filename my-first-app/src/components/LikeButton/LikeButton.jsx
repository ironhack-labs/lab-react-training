import { useState } from "react"

function LikeButton() {

    const [count, setCount] = useState(0)

    const incrementCounter = () => {
        setCount(count + 1)
    }

    return (
        <section className="LikeButton">
            <button onClick={incrementCounter}>{count} Likes</button>
        </section>
    )
}

export default LikeButton