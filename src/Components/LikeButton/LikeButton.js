
import { useState } from "react"
function LikeButton() {
    let [LikeButton, setCountButton] = useState(0)

    return (
        <div className="LikeButton">
            <h2>Counter button</h2>

            <p> {LikeButton} </p>


            <button onClick={() => setCountButton(LikeButton += 1)}> likes </button>


        </div>
    )
}

export default LikeButton


