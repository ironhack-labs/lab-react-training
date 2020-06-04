import React from 'react';

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

const Random = ({min, max}) => {
    return (
        <div>
            <h3>Random value between {min} and {max} => {getRandomArbitrary(min, max)}.</h3>
        </div>
    )
}
export default Random;
