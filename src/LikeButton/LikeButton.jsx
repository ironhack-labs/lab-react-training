import { useState } from 'react'
import './LikeButton.css'

function LikeButton() {

    const [counterValue, setCounterValue] = useState(0)
    const [colorValue, setColorValue] = useState('black')

    let colorArr = ['purple', 'blue', 'green', 'yellow', 'orange', 'red']
    let randomColor = colorArr[Math.floor(Math.random() * 5)]

    const btnStyle = {
        backgroundColor: `${randomColor}`
    }

    const incrementValue = () => {
        setCounterValue(counterValue + 1)
        setColorValue(randomColor)
    }



    return (
        <button style={btnStyle} onClick={incrementValue}>{counterValue} Likes</button>
    )
}

export default LikeButton