import React from 'react'
import { useState } from 'react'

export default function LikeButton() {
    const [count, setCount] = useState(0)
    const colorArr = ['purple', 'blue', 'green', 'yellow', 'orange', 'red']



    function handleClick() {


        // setCount(count + 1)
       
        // for (let i = 0; i < colorArr.length; i++) {
        //     setCount(count + 1)
        //    let bgColor = ''
        //     return bgColor = colorArr[i]
        // }



    }
    return (
        <button class="task8" onClick={handleClick} style={{ backgroundColor: `${'bgColor'}` }}>{count} like</button>
        // style={{color: changeBgC(props)}}
    )
}

