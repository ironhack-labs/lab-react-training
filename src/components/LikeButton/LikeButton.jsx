import { useState } from "react"
const LikeButton = () => {
    const [counterValue, setCounterValue] = useState(0)

    const handleCounter = () => {
        setCounterValue(counterValue + 1)
    }

    return (
        <section className="Counter">
            <button onClick={(handleCounter)}><h1>{counterValue} likes</h1></button>
        </section>
    )

}
export default LikeButton