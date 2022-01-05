import React from 'react';
import './Random.css';

const Random = (props) => {
    const randomNumber = Math.round(Math.random() * (props.max - props.min) + props.min);
    
    return (
        <div className="random-wrapper">
            <p>Random value between {props.min} and {props.max} ={'>'} {randomNumber}</p>
        </div>
    )
}

export default Random;