import { useState } from "react"
const LikeButton = () => {

    const [countLikes, setCount] = useState(0)
    const incrementCounter = () => {
        setCount(countLikes + 1)
    }

    return (

        <button onClick={incrementCounter}>Likes {countLikes} </button>
    )
}

export default LikeButton