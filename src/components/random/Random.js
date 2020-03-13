import React from 'react';
import './Random.css';

// IdCard component
const Random = ({min, max}) => {
    let randomNumber = Math.floor(Math.random() * max) + min;
    return (
        <div className="random-container">
            <div>Random value between {min} and {max} => {randomNumber}</div>
        </div>
    );
};

export default Random;