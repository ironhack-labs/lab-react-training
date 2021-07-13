import React from 'react';


function BoxColor({r, g, b}) {
    const divStyle={
        backgroundColor: `rgb(${r}, ${g}, ${b})`, 
        width:300, 
        height:100
    }
    return <div style={divStyle}>{divStyle.backgroundColor}</div>
     

}



export default BoxColor;