import './LikeButton.css'
import { useState } from 'react'

const LikeButton = () => {
    const [counterLike, setCounterLike] = useState(0)
    const [colorLike, setColorLike] = useState("")
    const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];

    const handleCounterLike = () => {
        setCounterLike(counterLike + 1)

        const colorRandom = colors[Math.floor(Math.random() * 6)]
        setColorLike(colorRandom)

    }

    return (
        <section className="LikeButton">
            <button onClick={(handleCounterLike)} style={{ backgroundColor: colorLike }}>Count{counterLike} </button>
        </section >

    )

}

export default LikeButton;