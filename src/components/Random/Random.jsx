import React from 'react';
import './Random.css'

function Random({min, max}){
    min = Math.ceil(min);
    max = Math.floor(max);
    let randomNumber = Math.floor(Math.random() * (max - min) + min)
    return (
        <div className='Random'>
            <p> Random value between {min} and {max} = {randomNumber}</p>
        </div>
    )
}

export default Random;