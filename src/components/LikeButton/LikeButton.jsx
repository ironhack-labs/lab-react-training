import { useState } from 'react'
import './LikeButton.css'

const LikeButton = () => {

    const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red']

    const [counter, setCounter] = useState(0)
    const [backColor, setBackColor] = useState('red')

    const increment = () => setCounter(counter + 1)

    const changeColor = e => {
        const currentColor = e.target.value
    }

    return (
        <button className='LikeButton' onClick={increment}>{counter} Likes</button>
    )
}

export default LikeButton