import React from 'react';
import style from './Random.module.css';

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function Random(props) {
    return (
        <p className={style.random}>
            Random value between {props.min} and {props.max} => {getRandomInt(props.min, props.max)}
        </p>
    )
}

export default Random;