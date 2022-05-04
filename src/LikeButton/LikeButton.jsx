import './LikeButton.css'
import { useState } from 'react'

const LikeButton = () => {

    const [counterValue, setCounterValue] = useState(0)

    const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red']
    const backgroundColor = colors[counterValue]



    return (

        <button className='counter' style={{ backgroundColor }} onClick={() => setCounterValue(prevCounterVal => ++prevCounterVal)}> {counterValue} </button>

    )
}

export default LikeButton