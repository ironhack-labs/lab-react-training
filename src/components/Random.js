import React from 'react';

const Random = props => {
    function getRandomValue(){
        const randomValue = Math.floor(Math.random() * (props.max-props.min) + props.min);
        return randomValue;
    }

    return(
        <div className="box">
            <div className="box-text">
            <p>Random value between {props.min} and {props.max} => {getRandomValue()}</p>
            </div>
        </div>
    )
}

export default Random;