import React from 'react'
import { useState } from 'react'

export default function LikeButton({ initialValue = 0 }) {
    const [count, setCount] = useState(initialValue)

    const [color, setColor] = useState('blue')

    const colors = ['purple','blue','green','yellow','orange','red']

    function add(){
        setCount(count + 1)
    }

    function changeColor(){
        setColor("purple" || "blue" || "green" || "yellow" || "orange" || "red")
    }

    return <div>
        <button onClick={() => {
            add();
            changeColor()}} style={{color:"white", backgroundColor: color}}> 
            {/* {() => if(count === 1){{count} Like} else {{count} Likes}} */}
            {count} Likes
        </button>
    </div>
}

