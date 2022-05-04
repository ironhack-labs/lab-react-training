
import { useState } from 'react'

const LikeButton = () => {

    const [counterValue, setCounterValue] = useState(0)

    let colores = ['purple', 'blue', 'green', 'yellow', 'orange', 'red']
    let rand = Math.floor(Math.random() * colores.length);

    return (

        <div className="Counter">
            <h2>Counter</h2>

            <p>You clicked {counterValue} times</p>

            <button onClick={() => setCounterValue(prevCounterVal => prevCounterVal + 1)}> + </button>
        </div>



    )
}

export default LikeButton