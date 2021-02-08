import React from 'react';



function BoxColor({r,g,b}){
    const names = {
        display: 'inline-block',
        border :"1px solid black",
        "align-content": "center",
        margin: 10,
        padding: 50,
        background:`rgba(${r},${g},${b})`
    }
    return (
    <div style={names} >
    rgb({r},{g},{b})
    </div>
    )
    
}

 


export default BoxColor