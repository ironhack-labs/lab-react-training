import React from 'react';

import './style.css';

function Random (data) {
    const random = Math.floor(Math.random() * data.max) + data.min
    return (
      <p>random value between {data.min} and {data.max} => {random}</p>
    )
}

export default Random;

