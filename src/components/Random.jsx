import React from 'react';
import './../views/Blackborder.css';

const Random = (props) => {
    return (
        <div className="Random">
            <p>Random value between {props.min} and {props.max} ={`>`} {Math.round(Math.random() * (props.max - props.min) + props.min)}</p>
        </div>
    )
}

export default Random
