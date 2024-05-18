import './LikeBtn.css'
import { useState } from 'react'

const LikeBtn = () => {

    const [counterValue, setCounterValue] = useState(0)

    const btnHandler = () => {
        setCounterValue(counterValue + 1)
    }
    const randomList = ['purple', 'blue', 'green', 'yellow', 'orange', 'red']
    const randomColor = randomList[Math.floor(Math.random() * randomList.length)]

    return (
        <button className='btn' onClick={btnHandler} style={{ backgroundColor: randomColor }}>{counterValue} likes</button>
    )
}

export default LikeBtn