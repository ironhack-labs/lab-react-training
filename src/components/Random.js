import React from 'react';
import '../assets/css/Random.css';

const Random = ({min, max}) => {

    const getRandom = () => {
        return `Random value between ${min} and ${max} => ${Math.floor(Math.random() * (max - min) + 1)}`
    }

    return (
        <div className='Random'>
            <h2>{getRandom()}</h2>
        </div>
    )
}

export default Random;