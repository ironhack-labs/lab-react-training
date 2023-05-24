import './Button.css'
import { useState } from "react"

const Button = () => {

    const [counterValue, setCounterValue] = useState(0)
    const [colorIndex, setColor] = useState(0)
    const colorsArray = ['purple', 'blue', 'green', 'yellow', 'orange', 'red']

    const handleClick = () => {

        setCounterValue(counterValue + 1)
        setColor((colorIndex + 1) % colorsArray.length)
    }

    const colorChange = {
        backgroundColor: colorsArray[colorIndex]
    }

    return (
        <button onClick={(handleClick)} style={colorChange} > {counterValue} Likes </button>
    )
}

export default Button






