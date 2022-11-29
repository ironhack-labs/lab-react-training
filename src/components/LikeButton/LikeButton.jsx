import { useState } from "react"
import "./LikeButton.css"



const LikeButton = () => {
    const [counterValue, setCounterValue] = useState(0)

    const incrementCounter = () => {
        setCounterValue(counterValue + 1)
    }
    return (
        <article className='Counter'>


            <button onClick={incrementCounter} className="likeButton">Likes {counterValue}</button>



        </article>
    )
}
export default LikeButton