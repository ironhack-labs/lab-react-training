import React from 'react';

function BoxColor({r,g,b}){
    const names = {
        display: 'inline-block',
        margin: 10,
        padding: 90,
        background:`rgba(${r},${g},${b})`
    }
    return (
    <div style={names} >
    rgb({r},{g},{b})
    </div>
    )
}
export default BoxColor