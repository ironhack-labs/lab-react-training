import React from 'react'
import './../styles/Random.css'
function Random(props) {
    
    var number = 0;
    number = Math.floor(Math.random() * (props.max - props.min + 1) + props.min);
    
    return (<div className="Random">Random value between {props.min} and {props.max} => {number}</div>);
    }

export default Random

