import { useState } from 'react'
import './LikeButton.css'

function LikeButtom() {
    const arrStyle = ['purple', 'blue', 'green', 'yellow', 'orange', 'red']

    const [conterValue, setInterval] = useState(0)
    
    return (
        <div className='buttom-style'>
            <button className={arrStyle[conterValue]} onClick={() => setInterval(preCounter => ++preCounter)}> {conterValue}likes</button>
        </div>

    )

}

export default LikeButtom