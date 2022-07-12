import { useState } from "react"


function LikeButton() {

    const [counterValue, setCounterValue] = useState(0)
    // const [color, setColor] = useState(['purple', 'blue', 'green', 'yellow', 'orange', 'red'])

    const incrementValue = () => setCounterValue(counterValue + 1)
    // const changeColor = () => setColor()

    return (

        <button onClick={incrementValue}> {counterValue} - Likes</button>

    )

}

export default LikeButton