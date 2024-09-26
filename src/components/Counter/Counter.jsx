import { useState } from "react"

const Counter = () => {

    const [counterValue, setCounterValue] = useState(0)


    const handleCounter = () => {
        setCounterValue(counterValue + 1)
    }

    return (
        <section className="Counter">
            <button onClick={(handleCounter)}>{counterValue} likes</button>
        </section>
    )
}

export default Counter