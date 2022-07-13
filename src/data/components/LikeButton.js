import React from 'react'
import { useState } from 'react'

export default function LikeButton() {
    const [count, setCount] = useState(0)
    const colorArr = ['purple', 'blue', 'green', 'yellow', 'orange', 'red']
    function handleClick() {
        setCount(count + 1)
        for (let i=0; i<colorArr.length; i++) {
            return colorArr[i]
        }
        console.log(count)
    }
    return (
        <button class="task8" style={{ backgroundColor: colorArr }} onClick={handleClick}>{count} like</button>
    )
}

