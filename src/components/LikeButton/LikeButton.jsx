import { useState } from 'react'
import './LikeButton.css'

const LikeButton = () => {

    const [buttonValue, setButtonValue] = useState(0)
    // const [colorValue, setColorValue] = useState(colorValue[0])


    // const handleCurrentColor = event => {
    //     setColorValue(event.target.value)
    // }

    // const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red']

    const incrementCounter = () => {
        setButtonValue(buttonValue + 1)
    }

    return (
        <article>

            <button className='likeButton' onClick={incrementCounter}>{buttonValue} Likes</button>

            {/* <select style={{ backgroundColor: `${colorValue}` }} onChange={handleCurrentColor}>
                <option value={colors[0]}></option>
                <option value={colors[1]}></option>
            </select> */}

        </article>
    )
}

export default LikeButton