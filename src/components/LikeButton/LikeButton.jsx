import './LikeButton.css'
import { useState } from 'react'

const LikeButton = () => {
    const [counterLike, setCounterLike] = useState(0)

    const handleCounterLike = () => {
        setCounterLike(counterLike + 1)
        // const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];

        // const colorRandom = colors[Math.floor(Math.random() * 6)]
        // const custonColor = { backgroundColor: colorRandom }

    }

    return (
        <section className="LikeButton">
            <button onClick={(handleCounterLike)}>Count{counterLike}</button>
            {/* <button className='button' style={custonColor} onClick={(handleCounterLike)}>Count{counterLike}</button> */}
        </section >

    )

}

export default LikeButton;