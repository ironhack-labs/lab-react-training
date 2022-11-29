import { useState } from 'react'

function LikeButton() {

    const [counterValue, setCounterValue] = useState(0)

    const incrementCounter = () => {
        setCounterValue(counterValue + 1)
    }

    return (
        <article className='Like'>

            <hr />

            <button onClick={incrementCounter}>{counterValue} Likes</button>
            <hr />
        </article>
    )


}


export default LikeButton