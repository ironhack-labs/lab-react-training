import React from "react"

const Random = ({min, max}) =>{
    
    let randomNumber = Math.floor(Math.random() * (max - min))
    return(
        <h1>Random Value between {min} & {max} => {randomNumber} </h1>
    )
}

export default Random