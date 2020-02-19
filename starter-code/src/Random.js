import React from 'react';

const Random = prop => {
    const random = Math.floor( Math.random() * (prop.max-prop.min)) + prop.min;
    return (
    <p className="random-card">Random value between {prop.min} and {prop.max} => {random}</p>
    );
};

export default Random;