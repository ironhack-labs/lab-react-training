import React from 'react';

function Random({max,min}){
    let ran = Math.floor(Math.random() * (max - min)) + min;
    return(
        <div className="numRandom">
        <p>Random value between {min} and {max} = {ran} </p>

    </div>
    )

}


export default Random;

