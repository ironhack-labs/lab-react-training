import { useState } from "react"


const LikeButton = () => {

    const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red']

    const [counterValue, setCounterValue] = useState(0)


    const incrementCounter = () => {
        setCounterValue(counterValue + 1)
    }

    return (
        <article className="Idcard">
            <button onClick={incrementCounter}>{counterValue} Likes</button>
        </article>
    )

}
export default LikeButton