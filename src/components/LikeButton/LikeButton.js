
import './LikeButton.css'

import { useState } from "react"


function LikeButton() {

    const [buttonValue, setButtonValue] = useState(0)
    const [color, setColor] = useState('none')

    const style = {
        background: color
    }

    // para seguir después, iterar sobre el array y sacar los colores de cada índice.
    const incrementAndColor = () => {
        setButtonValue((prevCountValue) => prevCountValue + 1)
        setColor('red')
    }
    return (
        <button className="LikeButton" style={style} onClick={incrementAndColor} > {buttonValue} Likes </button>

    );
}

export default LikeButton
