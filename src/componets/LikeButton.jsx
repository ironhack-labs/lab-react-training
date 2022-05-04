
import { useState } from 'react'

const LikeButton = () => {
    const [value, setValue] = useState(0)
    return (
        <div className="Counter">
            <h2>Counter</h2>

            <p>You clicked {value} times</p>

            <button onClick={() => setValue(previusValue => --previusValue)}> - </button>
            <button onClick={() => setValue(previusValue => ++previusValue)}> + </button>
        </div>
    );

}

export default LikeButton