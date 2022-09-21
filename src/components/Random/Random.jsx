import React from "react"
import './Random.css'

const Random = (props) => {
    
    let min = props.min;
    let max = props.max;

    let randomNumber = Math.floor(Math.random() * Number(max)) + Number(min)

    return(
        
        <p className="randomSquare"> Random value between {min} and {max} is {randomNumber}</p>

    )
}

export default Random