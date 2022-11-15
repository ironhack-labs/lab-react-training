import React from "react";

function Random(props){
    const {min, max} = props
    function randomNumber(min, max){
        return Math.floor(Math.random() * (max-min +1)+min)
    }
    return(
        <p className="random">Random Value bewteen {min} and {max} is {randomNumber(min,max)}</p>
    )
}
export default Random