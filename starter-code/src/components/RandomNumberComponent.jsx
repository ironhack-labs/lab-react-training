import React from 'react';

const RandomNumberComponent = (props) => {

    let max = props.max,
        min = props.min,
        randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
    return (
        <div class="card">
            <h1>Randon value between ({props.min} & {props.max}): {randomNumber}</h1>
        </div>
    )
}

export default RandomNumberComponent;
