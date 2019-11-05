import React from 'react';

const Random = (props) => {
    let result = 0;
    let max = props.max;
    let min = props.min;
    result = Math.floor(Math.random() * max) + min;
    return (
        <div className="black-border d-flex">
            <p>
                Random value between {props.min} and {props.max} => {result} 
            </p>
        </div>
    )
}

export default Random;
