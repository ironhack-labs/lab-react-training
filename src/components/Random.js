import React from 'react';
import './Random.css';

const Random = ({min,max}) =>{

    const getRandom = Math.floor((Math.random() * max) + min);

    return (
        <div class="Random">
            <p>Random value between {min} and {max} => {getRandom} </p>
        </div>
    );
};

export default Random;
