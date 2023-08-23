import './LikeButton.css'
import { useState } from 'react'

const LikeButton = () => {

    const [counterValue, setCounterValue] = useState(0)


    const decrementCounterValue = () => {
        setCounterValue(counterValue + 1)

    }
    return (
        < div className="LikeButton" >
            <p>{counterValue} Like</p>
            <button onClick={decrementCounterValue}> + </button>
        </div >

    )

}

export default LikeButton


