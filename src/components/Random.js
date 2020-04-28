import React from "react";
import "../index.css";

const Random = (props) => {
    const getRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max + 1)) + min;
    };

    const { min, max } = props;

    return (
        <div className="greetings">
            <p>Random value between {props.min} and {props.max} => {getRandomNumber(min, max)}</p>
        </div>
    )
}

export default Random;
