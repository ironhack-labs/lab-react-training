import { useState } from 'react'
import './LikeButton.css'



const LikeButton = () => {

    const [counter, setCounter] = useState(0)



    const incrementCounter = () => {

        setCounter(counter + 1)
    }


    const randomColor = () => {

        const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red']

        return colors[Math.floor(Math.random() * colors.length)]
    }

    return (
        <div className="LikeButton">

            <button style={{ backgroundColor: randomColor() }} onClick={incrementCounter}>{counter} Likes</button>

        </div>
    )
}

export default LikeButton