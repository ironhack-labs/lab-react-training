import React from 'react';

const Random = ({ min, max }) => {
    return (
        <p>Random value between {min} and {max} ={'>'} {Math.random() * (max - min) + min}</p>
    );
}

export default Random;