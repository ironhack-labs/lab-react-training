import React from 'react';

const BoxColor = (props) => {

    const myStyle = {
        height: "50px",
        width: "100%",
        borderStyle: "solid",
        background: `rgb(${props.r},${props.g},${props.b})`
    }


    return <div style={myStyle}></div>
  
   
}

export default BoxColor;