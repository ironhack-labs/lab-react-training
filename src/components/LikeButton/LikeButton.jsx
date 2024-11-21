import { useState } from 'react'

const LikeButton = () => {

    const [counterValue, setCounterValue] = useState(0)

    const handleClick = () => {
        setCounterValue(counterValue + 1)
    }
    const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red']

    const randomColor = colors[Math.floor(Math.random() * colors.length)]
    return (
        <button onClick={(handleClick)} style={{ background: randomColor, margin: 20, padding: 20 }}>{counterValue} Likes</button>
    )

}

export default LikeButton

