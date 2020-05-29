import React, { Component } from "react";

// TODO: to be deleted or replaced
// import 'bootstrap/dist/css/bootstrap.css';
// import "./Random.css";


/* function randomValue (min , max) {
    let randomNumber = Math.random() * (max - min) + min;
    console.log(randomNumber)
    return randomNumber;
}; */

function Random (props) {

function randomValue (min , max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
    // return randomNumber;
};
    return (
        <div>
            <p>Random value between {props.min} and {props.max} => {randomValue()}.</p>
        </div>
    )
};

// {Math.random() * (props.max - props.min) + props.min}

/* class Random extends Component {

    function randomValue (min, max) {
        let randomNumber = Math.random() * (max - min) + min;
        console.log(randomNumber)
        return randomNumber;
    };

    render(props) {
        // ...
        return (
            <div>
                <p>Random value between {props.min} and {props.max} => {randomValue(randomNumber)}.</p>
            </div>
        );
    }
} */


export default Random;