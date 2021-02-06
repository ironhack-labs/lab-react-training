import React from 'react';

function BoxColor({r, g, b}) {
    const style = {
        backgroundColor: `rgb(${r}, ${g}, ${b})`, 
        width: '80px', 
        height: '40px', 
        margin: '0 auto'
    }
    return (
        <div style={style}>
        </div>
    )
}

export default BoxColor;