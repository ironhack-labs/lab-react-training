

import "./LikeButton.css"
import { useState } from "react"


const LikeButton = () => {

    const [counterLikes, setCounterLikes] = useState(0)


    const handleCounter = () => {

        setCounterLikes(counterLikes + 1)

    }

    return (
        <button className="btn" onClick={handleCounter}>{counterLikes} likes</button>
    )

}


export default LikeButton