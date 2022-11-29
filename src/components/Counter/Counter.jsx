import { useState } from "react";
import './Counter.css'


const Counter = () => {
    const [counterValue, setCounterValue] = useState(0)
    const incrementCounter = () => {
        setCounterValue(counterValue +1)
    }

     return (
        <article className='Counter'>
            <button className = "ButtonCounter" onClick={incrementCounter}>{counterValue} Likes</button>
        </article>
    )
}

export default Counter