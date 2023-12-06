const { useState } = require("react")

const LikeButton = () => {

        const [counterValue, setCounterValue] = useState(0)

        const handleCounter = () => {
        setCounterValue(counterValue + 1)
    }

    return (

        <button onClick={(handleCounter)}>{counterValue} Likes</button>
    )
}

export default LikeButton