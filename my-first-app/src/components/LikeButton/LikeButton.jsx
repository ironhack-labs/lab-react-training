import { useState } from "react"

const LikeButton = () => {

    const [count, setCount] = useState(0)

    const incrementCounter = () => {
        setCount(count +1 )
    }


    return (
        <div>
            <h2>Contador de Likes</h2>
            <button onClick={incrementCounter}>{count}Likes</button>

        </div>
    )
}

export default LikeButton