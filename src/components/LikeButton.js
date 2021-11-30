import React, { useState } from 'react'

export default function LikeButton() {
    const [count, setCount] = useState(0)
    const [liked, setLiked] = useState(false)
    let array = ['purple','blue','green','yellow','orange','red']

    const clickHandler = () => {
        console.log('clicked')

        setCount(count +1)
    }

    return (
        <div>
            <button onClick={clickHandler} style={{
                backgroundColor: array[Math.floor(Math.random() * array.length)]
            }}>{count} likes</button>

        </div>
    )
}
