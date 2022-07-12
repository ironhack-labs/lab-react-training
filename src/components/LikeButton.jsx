import { useState } from "react"


const LikeButton = () => {

    const [counterLike, setCounterLike] = useState(0)

    const incrementValue = () => setCounterLike(counterLike + 1)

    return (
        <button onClick={incrementValue}> {counterLike} likes</button>
    )
}



export default LikeButton