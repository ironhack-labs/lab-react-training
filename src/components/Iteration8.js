
import { useState, useEffect} from "react";

const LikeButton = () => {
    const [counter, setCounter] = useState(0)
    const handleClick = () => {
        let newCount = counter + 1
        setCounter(newCount)
    }

    return (
        <button onClick={handleClick}>{counter} Likes</button>
    )
}

export default LikeButton;