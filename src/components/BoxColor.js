import React from 'react';

const BoxColor = ({r, g, b}) => {
    const boxColor = `rgb(${r}, ${g}, ${b})`
    return (
    <div style={{ backgroundColor: boxColor}}>
        <h4>
        {boxColor}
        </h4> 
    </div>)
}

export default BoxColor;