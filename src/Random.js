import React from 'react';
import './App.css';

function Random (props){
    const min = props.min;
    const max = props.max;
    
    const RandomNumber = Math.floor(Math.random()*(max-min) +min)
            
    return (
        <>
            Random value between {min} and {max} ={">"} {RandomNumber}
        </>
    )
}

export default Random;