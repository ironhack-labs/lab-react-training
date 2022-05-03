import { useState } from 'react'


function Counter() {

    const [counterValue, setCounterValue] = useState(0)

    return (
        <article className="Counter">
            <button onClick={() => setCounterValue(prevCounterVal => ++prevCounterVal)}> {counterValue} LIKES </button>
        </article>
    );
}

export default Counter;