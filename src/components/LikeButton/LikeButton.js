import './LikeButton.css'

import { useState } from 'react'

const LikeButton = () => {
    const [countValue, setCountValue] = useState(0)

    const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red']

    // utilizaremos renderizado condicional
    let newColor = { background: colors[countValue % colors.length] }


    return (
        <div>
            <h1>BUTTON</h1>
            <button style={newColor} className='countBtn' onClick={() => setCountValue((prevCountValue) => prevCountValue + 1)}>{countValue} Likes</button>
        </div>
    )

}

export default LikeButton