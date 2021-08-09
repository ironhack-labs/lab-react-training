import React from 'react';

function BoxColor(props) {
    const {r,g,b} = props
    const BoxColor = `rgb(${r},${g},${b})`;
    return (
        <div style={{backgroundColor: BoxColor}} className='colorBox' >
            {BoxColor}
        </div>
    )
}

export default BoxColor;