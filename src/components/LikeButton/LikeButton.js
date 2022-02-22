import { useState } from "react"

const LikeButton = () => {

    let [count, setCount] = useState(0)


    return (
        
        <button onClick={() => setCount((countValue) => countValue + 1)}> {count} likes </button>
    )
}

export default LikeButton