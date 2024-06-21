import { useState } from 'react'
import './LikeButton.css'

const LikeButton = () => {

    const [counterValue, setCounterValue] = useState(0)

    const handleCounter = () => {
        setCounterValue(counterValue + 1)

    }

    return (
        <button onClick={(handleCounter)} className='btnCounter'> {counterValue} Likes </button>
    )
}
export default LikeButton