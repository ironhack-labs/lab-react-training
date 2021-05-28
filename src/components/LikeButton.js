import React, { useState } from 'react'

export default function LikeButton() {
const [sumar, setsumar] = useState(0)


    return (
        <div className="App" >
            <button  onClick={()=>setsumar(sumar+1)} style={{width:'30%'}} >
            {sumar} likes
            </button>
            
         
        </div>
    )
}