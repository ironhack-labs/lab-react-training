import '../App.css'
import { useState } from "react"


const LikeButton = () => {

    const [counterValue, setCounterValue] = useState(0)

    const colorArray = ['purple', 'blue', 'green', 'yellow', 'orange', 'red']
    const [color, setColor] = useState('purple')

    const incrementCounter = () => {
        setCounterValue(counterValue + 1)
    }

    // const colorChange = () => {
    //     const random = colorArray[1]
    //     setColor(random)
    // }

    return (
        <div className="Counter">
            <button onClick={() => {
                incrementCounter()
                // colorChange()
            }}
                className="likeButton">
                {counterValue} likes</button>
        </div>
    )
}


export default LikeButton