import React from 'react';

const Random = props => {
    const randomNum = (min, max) => {
        min = Math.floor(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }
    return (
        <div>
            <p>Random value between {props.min} and {props.max} = {randomNum(props.min, props.max)}</p>
        </div>
    )
}


export default Random;