import React from 'react';

function Random({min, max}){
    let randomVal = Math.floor(Math.random() * max) + 1; 
    return(
        <div>
            <p>Random value between {min} and {max} ={'>'} {randomVal}</p>
        </div>
    )
}

export default Random;