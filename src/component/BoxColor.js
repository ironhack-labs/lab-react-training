import React from 'react'

const BoxColor = ({r,g,b}) => {

    const divStyle = {
        color: 'black',
        border: '1px solid black',
        height: '100px',
        backgroundColor: `rgb(${r}, ${g}, ${b})`,
        margin: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      };

    return (
        <div style={divStyle}>rgb({r},{g},{b})</div>
    )
}

export default BoxColor

