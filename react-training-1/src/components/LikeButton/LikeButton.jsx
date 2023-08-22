import { useState } from "react"

const LikeButtom = () => {

    const [counterValue, setCounterValue] = useState(0)

    const incrementCounterValue = () => {
        setCounterValue(counterValue + 1)
    }

    return (
        <>
            <button onClick={incrementCounterValue}> {counterValue}Likes </button>
        </>
    )
}

export default LikeButtom