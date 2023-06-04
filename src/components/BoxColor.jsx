import React from 'react';
function BoxColor(props) {

    const color = 'rgb'+'('+props.r+","+ props.b+","+props.b+')';
    const divStyle = {
        display: 'flex',
        border: '2px',
        margin:'5px',
        backgroundColor: color,
        height: '60px',
        width: '500px',
        alignItems: 'center',
        
        
    }

    return (
        <div style={divStyle}>
            <h3>{color}</h3>  
        </div>
    )  
}

export default BoxColor;