import React from 'react';

const BoxColor = (props) => {
    const {r,g,b} = props;
    const color = `rgb(${r},${g},${b})`
    
    return <div style={{backgroundColor: color, height: '100px', margin: '10px'}}></div>
}

export default BoxColor