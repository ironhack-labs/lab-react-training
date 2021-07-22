import React from 'react';


function BoxColor ({ r, g, b, className}) {
    
   return (
        <div className="BoxColor" style={{ backgroundColor: `rgb(${r},${g},${b})`}}>
        <span className="fs-4">Box Colors rgb({r},{g},{b})</span>
        </div>
    )
    
}


export default BoxColor

