import React from 'react'
import { useState } from 'react'

const LikeButton = ({ initialValue = 0 }) => {
    const [count, setCount] = useState(initialValue)

    return (
        <div style = {{ margin:"10px"}}>
             <h3> <button  style = {{ color:"white", backgroundColor: "grey"}} onClick={() => setCount(count + 1)}>{count} Likes</button>  </h3> 
        </div>
    )
}

export default LikeButton
