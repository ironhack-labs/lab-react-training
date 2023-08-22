import { useState } from 'react'

const LikeButton = () => {

    const [counterValue, setCounterValue] = useState(0)

    const incrementCounterValue = () => {
        setCounterValue(counterValue + 1)
    }

    return (

        <>
            <div>

                <button onClick={incrementCounterValue}> {counterValue} likes </button>

            </div>
        </>

    )
}

export default LikeButton