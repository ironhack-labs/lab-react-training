import './LikeButton.css'
import { useState } from 'react'


const LikeButton = () => {

    const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red']

    const randomColors = colors[Math.floor(Math.random() * colors.length)]

    const style = { backgroundColor: `${randomColors}` }

    const [likeCounter, setLikeCounter] = useState(0)

    const incrementCounter = () => {
        setLikeCounter(likeCounter + 1)
    }

    return (
        <div className='LikeButton' >
            <button onClick={incrementCounter} style={style}>{likeCounter}Likes</button>
        </div>

    )
}

export default LikeButton