import { useState } from 'react'
import './likeButton.css'


const LikeButton = () => {

    const [counterValue, setCounterValue] = useState(0)

    const incrementCounter = () => {
        setCounterValue(counterValue + 1)
    }


    return (
        <article className='Counter'>



            <button onClick={incrementCounter}>{counterValue} Likes</button>


        </article>
    )
}

export default LikeButton