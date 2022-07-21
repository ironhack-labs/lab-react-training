import './LikeButton.css'
import { useState } from "react"


function LikeButton() {
    const [counterValue, setCounterValue] = useState(0)
    //const [firstColor, nextColor] = useState('purple')

    //const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red']
    



    const incrementValue = () => setCounterValue(counterValue + 1)


    return (
        <div>
            <button onClick={incrementValue}>{counterValue} Likes</button>
        </div>
    )
}

export default LikeButton