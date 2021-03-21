import React from 'react';
import '../assets/css/Random.css'


const Random = ({ min, max }) => {
    const getRandomInt = () => {
        return Math.floor(Math.random() * ((max + 1) - min)) + min;
    }
    return (
        <div className='random'>
            <p>Random value between {min} and {max} => {getRandomInt()}</p>
        </div>
    )
}

export default Random;