import React from 'react';
import './Random.css';

function Random({min, max}){
    let randomVal = Math.floor(Math.random() * max) + 1; 
    return(
        <div className="random-container">
            <p>Random value between {min} and {max} ={'>'} {randomVal}</p>
        </div>
    )
}

export default Random;