import { useState } from 'react'
import './LikeButton.css'

const LikeButton = () => {

    const [counter, setCounter] = useState(0)

    const incrementCounter = () => {
        setCounter(counter + 1)
    }

    return (<div className='button-container'><button className='LikeButton' onClick={incrementCounter}>{counter} Likes</button></div>)

}

export default LikeButton