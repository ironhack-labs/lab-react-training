import React from 'react';

import './style.css';

function BoxColour (data) {
    return (
      <div className ="box">
        <p style={{backgroundColor: `rgb(${data.r},${data.g},${data.b})`}} >
          rgb ({data.r} {data.g} {data.b})
        </p>
      </div>
    )
}

export default BoxColour;

