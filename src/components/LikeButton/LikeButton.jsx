import { useState } from 'react'
import './../LikeButton/LikeButton.css'


const LikeButton = () => {

    const [counterValue, setCounterValue] = useState(0)

    const incrementCounter = () => {
        setCounterValue(counterValue + 1)
    }

    const color = ['purple', 'blue', 'green', 'yellow', 'orange', 'red']


    const buttonStyle = {
        backgroundColor: color[Math.floor(Math.random() * color.length)]
    }


    return (
        <div >
            <button className='button' style={buttonStyle} onClick={incrementCounter} > {counterValue} Likes</button>
        </div>
    )
}

export default LikeButton