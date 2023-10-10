
import { useState } from "react"
import "./CounterButton.css"


const CounterButton = () => {


    const [counterValue, setCounterValue] = useState(0)
    const [colorValue, setColorValue] = useState("purple")

    const handleCounter = () => {
        setCounterValue(counterValue + 1)
    }

    const handleColor = () => {
        setColorValue(colorValue)
    }
    const bgButton = {
        backgroundColor: `${colorValue}`
    }


    return (

        <button
            className="Counter"
            style={bgButton}
            onClick={handleCounter}>
            {counterValue} Likes</button>

    )

}

export default CounterButton   