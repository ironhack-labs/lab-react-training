import React from 'react'

export default function Random(props) {
  
    const random= (min, max) =>{
        min = props.min;
        max = props.max;
        return Math.floor(Math.random()* (max - min +1)) +min;
    }
        
    return (
        <div className="randomNumber">
            <p>Random value between{props.min} and {props.max}</p>
            <b>My random number is {random(props.min, props.max)}</b>
        
        </div>
    )
}
