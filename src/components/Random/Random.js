import React from 'react';
import './Random.css';

function Random(props) {
    return(
        <div>
            <p className="border-box" min={props.min} max={props.max}>Random value between {props.min} and {props.max} => {Math.floor(Math.random() * (props.max - props.min + 1)) + props.min}</p>
        </div>
    )
}

export {Random};