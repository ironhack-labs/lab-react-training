import React, {Component} from 'react';

const Random = ({min, max}) => {
    let randnum = Math.floor(Math.random()*(max - min) + min);
    return (
        <div className="box">
            <p>Random number between {min} and {max} = {randnum}</p>
        </div>
    )
}

export default Random;
