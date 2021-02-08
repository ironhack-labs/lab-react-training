import React from "react";

function Random ({min,max}){
    let randomNumber = Math.floor(Math.random()*(max-min))+min

    return(
    <p>Random value between {min} and {max} = {randomNumber}</p>
    );
}

export default Random;

