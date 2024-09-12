import { useState } from 'react';

const LikeButton = () => {

    const [counterValue, setCounterValue] = useState(0)
    const [colorValue, setColorValue] = useState('grey')


    const handleCounter = () => {
        setCounterValue(counterValue + 1)
    }
    // const handleColor = () => {
    //     setCounterValue(counterValue + 1)
    // }
    return (
        <section className="CounterLike">
            <button onClick={(handleCounter)}>{counterValue} LIKES</button>
        </section>
    )
}

export default LikeButton