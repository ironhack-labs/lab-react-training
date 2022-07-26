import React from 'react';

function BoxColor(props) {

    return (
        <div style = {{backgroundColor: `rgb${(props.r, props.g, props.b)}`,
        width: 100,
        height:40}}>
       
      </div>   
 );
}

export default BoxColor;
