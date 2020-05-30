import React from 'react';
import './Greetings.css';

function Random (props) {
    let min = props.min;
    let max = props.max;
    let randomNumber = Math.floor(Math.random() * (max - min)) + min;
    return (
    <div className="GreetingsDiv">
        Random value between {props.min} and {props.max} = {randomNumber}
    </div>
    )
}

export default Random;