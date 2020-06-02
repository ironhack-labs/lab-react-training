import React, { Component } from "react";

// TODO: to be deleted or replaced
// import 'bootstrap/dist/css/bootstrap.css';
// import "./Random.css";


/* function randomValue (min , max) {
    let randomNumber = Math.random() * (max - min) + min;
    console.log(randomNumber)
    return randomNumber;
}; */

function randomValue (min , max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
};

function Random (props) {
    return (
        <div>
            <p>Random value between {props.min} and {props.max} => {randomValue(props.min, props.max)}.</p>
        </div>
    )
};

// {Math.random() * (props.max - props.min) + props.min}

export default Random;