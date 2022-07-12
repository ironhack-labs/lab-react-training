
import { useState } from 'react'
import './LikeButton.css'

function LikeButton() {

    const [buttonValue, setButtonValue] = useState(0)

    const incrementValue = () => setButtonValue(buttonValue + 1)
    // let colores = ['purple', 'blue', 'green', 'yellow', 'orange', 'red']
    // let rand = Math.floor(Math.random() * colores.length)

    return (
        <div className='LikeButton'>

            <button onClick={incrementValue}>{buttonValue} likes</button>

        </div>
    )
}

export default LikeButton
