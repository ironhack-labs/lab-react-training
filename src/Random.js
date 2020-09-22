import React from 'react';
 
const randomstyle = {
    border: "1px solid black",
    margin: 20,
    display: "flex",
    padding: 20,
    fontSize: 22,
}

const Random = props => {
    const num = parseInt(Math.random() * (props.max - props.min) + props.min);

    return (
        <div style={randomstyle}>
             <span>random value from {props.min} to {props.max} => {num}</span>
        </div>
    );
}

export default Random;