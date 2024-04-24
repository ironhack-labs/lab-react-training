import React from 'react';
import './BoxColor.css';

function BoxColor({ r, g, b }) {
    const color = `rgb(${r}, ${g}, ${b})`;

    return (
        <div className='BoxColor' style={{ backgroundColor: color }}>
            <p>{color}</p>
        </div>
    );
}

export default BoxColor;
