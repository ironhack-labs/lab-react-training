import React from 'react';

const RandomNumber = ({min,max}) => (
    <div className="random">
        <span>Random value between {min} and {max} ={'>'} {random(min,max)}</span>
    </div>
)

function random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default RandomNumber;