import React from 'react';
import Random from './Random'


const divStyle = {
    color: 'blue',
    
  };

const BoxColor = ({r, g, b}) => {
    return (
        <div>
            rgb({r}, {g}, {b})
        </div>
    )
    
}
export default BoxColor;