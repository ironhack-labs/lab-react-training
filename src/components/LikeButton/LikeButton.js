import { useState } from "react"
import './LikeButton.css'

const LikeButton = () => {

    const [countValue, setCountValue] = useState(0)

    return (
        <div className="LikeButton">
            <button onClick={() => setCountValue((countValue) => countValue + 1)}>{countValue} Likes</button>
        </div>
    )
}

export default LikeButton