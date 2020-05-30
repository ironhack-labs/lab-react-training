import React from 'react';

const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    let result = Math.floor(Math.random() * (max - min + 1) + min); //max and min included

    return result;
};

const Random = (props) => (
    <h3>Random value between {props.min} and {props.max} => {getRandomInt(props.min, props.max)}</h3>
);

export default Random;