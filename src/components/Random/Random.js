import React from "react";

const Random = (props) =>{
    let randomNum= Math.floor(Math.random()*(props.max-props.min))+ props.min;

    return (
    <div className= "Random-container">
        <p>
        Random value between {props.min} and {props.max} : {randomNum}
        </p>    
    </div>
    )
}

export default Random;