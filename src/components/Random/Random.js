import React from 'react';

const Random = ({min, max}) => {
    let randomNumber = Math.floor(Math.random() * (max - min + 1) + min)
    return (
        <div className='card mt-2 border-dark text-start'>
            <h3 className='ms-2'>Random value between {min} and {max} {'=>'} {randomNumber} </h3>
        </div>
    );
};

export default Random;