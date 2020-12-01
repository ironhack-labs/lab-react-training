import React from 'react';
import './Random.css'

function Random (props){
let randomNumber =  Math.floor(Math.random() * ((props.max) - (props.min) + 1)) + (props.min)
    return (
        <div className="Random">
        <p>Random Value between {props.min} and {props.max} is ➡ {randomNumber}</p>
        </div>
    )
}
 
export default Random;