import React from "react"

function Random({min, max}){

    const handleRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    return(
        <div className="randomContainer">
            <h3>Random number between {min} and {max} is {handleRandomNumber(min, max)}</h3>
        </div>
    )
}

export default Random