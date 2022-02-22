import { useState } from "react"
import "./LikeButton.css"

const LikeButton = () =>{
    const[count, setCount] = useState(0)

    return(
        <div>
            <button onClick={() => setCount(count + 1)}>{count} likes</button>
        </div>
    )
}

export default LikeButton