import React from 'react'





const BoxColor = ({r,g,b}) => {

    const divStyle = {
        color: 'black',
        border: '1px solid black',
        width: '600px',
        height: '50px',
        backgroundColor: `rgb(${r}, ${g}, ${b})`
      };

    return (
        <div style={divStyle}>rgb({r},{g},{b})</div>
    )
}

export default BoxColor

