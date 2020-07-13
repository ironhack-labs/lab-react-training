import React from 'react'

const Color = props => {
    
    const divStyle = {
        backgroundColor: `rgb(${props.red},${props.green}, ${props.blue})`
    }

    return (
        <p style={divStyle} className="color">rgb({props.red},{props.green},{props.blue})</p>
    )
};

export default Color;

  