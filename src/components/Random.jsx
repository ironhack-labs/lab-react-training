import React from 'react';
import './Random.css';


function Random(props) {
    const randomNumber = Math.floor(Math.random() * (props.max - props.min) + props.min)
    return (
        <div className="Random">
            <p>Random value between {props.min} and {props.max} => {randomNumber} </p>
        </div>
    );
};

export default Random;