import { useState } from 'react'
import '../LikeButton/LikeButton.css'

const LikeButton = () => {

    const colorsArray = ['purple', 'blue', 'green', 'yellow', 'orange', 'red']

    const randomColor = colorsArray[Math.floor(Math.random() * colorsArray.length)]
    const randomColorB = colorsArray[Math.floor(Math.random() * colorsArray.length)]
    const boxStyle = {
        backgroundColor: randomColor
    }

    const boxStyleB = {
        backgroundColor: randomColorB
    }

    const [counterValue, setCounterValue] = useState(0)
    const [counterValueB, setCounterValueB] = useState(0)

    const incremetCounter = () => {
        setCounterValue(counterValue + 1)
    }
    const incremetCounterB = () => {
        setCounterValueB(counterValueB + 1)
    }

    return (
        < div className='LikeButton' >
            <button onClick={incremetCounter} style={boxStyle}>{counterValue} Likes</button>
            <button onClick={incremetCounterB} style={boxStyleB}>{counterValueB} Likes</button>
        </div >
    )

}

export default LikeButton
