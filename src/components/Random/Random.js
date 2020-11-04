import React from 'react';

import './Random.css';

const Random = (
    {
        min, 
        max
    }
) => {
    
    const setRandom = (min, max) => {
        return (
          Math.floor(Math.random() * (max - min)) + min
        );
    };

    return(
        <div className="random-container">
            <p>Random value between {min} and {max} => {setRandom(min, max)}</p>
        </div>
    );
};

export default Random;