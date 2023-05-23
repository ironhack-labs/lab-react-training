import { useState } from 'react'
import './LikeButtom.css'

const LikeButtom = () => {

    const [counterValue, setCounterValue] = useState(0)
    const [colorValue, setColorValue] = useState(0)
    const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red']
    const handleCounter = () => {
        setCounterValue(counterValue + 1)
        colorValue >= colors.length - 1 ? setColorValue(0) : setColorValue(colorValue + 1)
    }

    return (
        <>
            <button onClick={handleCounter} style={{ backgroundColor: colors[colorValue] }}>{counterValue} Likes</button>
        </>
    )
}

export default LikeButtom