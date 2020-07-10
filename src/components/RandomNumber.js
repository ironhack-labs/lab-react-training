import React from 'react';

export default function RandomNumber(props) {
    const generateRandom = () => Math.floor(Math.random() * Number(props.max)) + Number(props.min);

    return (
        <div className="container">
            <h3>Random value between {props.min} and {props.max} = {generateRandom()}</h3>
        </div>
    )
}