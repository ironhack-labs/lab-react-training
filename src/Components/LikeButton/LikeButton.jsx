import { useState } from "react"

function LikeButton() {

    const [likeValue, setLikeValue] = useState(0)
    const increaseVal = () => setLikeValue(likeValue + 1)

    return (
        <div className="likeButton">
            
            <button onClick={increaseVal}> {likeValue} likes </button>
            
        </div>
    )

}

export default LikeButton