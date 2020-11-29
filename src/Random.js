import React from "react"

export default function Random ({min,max}) {

    const rand=Math.floor(Math.random()*(max-min) + min);

    return (
        <div>
         <p>Random value between {min} and {max} is :{rand}</p>
        </div>
    )
        
}