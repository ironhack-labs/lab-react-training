import React from 'react';
import './Random.css';

//its functional, doesnt need extending component, dosnt have state
function Random(props){

    const getRandomInt = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
    }

    return (
        <div>
            <p>Random value between {props.min} and {props.max} = {getRandomInt(props.min, props.max)}  </p>
        </div>
        
    )
}
export default Random;