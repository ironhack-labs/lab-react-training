import React from 'react';
import '../assets/css/BoxColor.css';

const BoxColor = ({r, g, b}) => {
    
    const rgbToHex = () => '#' + [r, g, b]
        .map(code => {
            const hex = code.toString(16)
            return hex.length === 1 ? '0' + hex : hex
        })
        .join('');
      
    
    return (
        <div className='BoxColor' style={{backgroundColor: `rgb(${r}, ${g}, ${b})`}}>
            <h4>rgb({r}, {g}, {b})</h4>
            <h4>{rgbToHex()}</h4>
        </div>
    )
}

export default BoxColor;