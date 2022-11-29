import { useState } from 'react'
import './LikeButton.css'

const LikeButton = () => {

    const [counterValue, setCounterValue] = useState(0)

    const incrementCounter = () => {
        setCounterValue(counterValue + 1)
    }


    return (


        <button onClick={incrementCounter} className='LikeButton'

        >{counterValue} Likes</button>


    )
}

export default LikeButton