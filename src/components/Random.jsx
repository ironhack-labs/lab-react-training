import React from 'react';

function Random(props) {
    const Result = Math.floor(Math.random() * (props.max - props.min)) + props.min
    return (
        <span>Random value between {props.min} and {props.max} = {Result} </span>
    )
}

export default Random;
