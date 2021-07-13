import React from "react";

function Rating ({children}) {
    let stars = Math.round(children);
    const divStyle = {
        height:50,
        width:50
    }

    return (
            <div>
            {
            stars === 0 ? <div style={divStyle}>☆☆☆☆☆</div>
            : stars === 1 ? <div style={divStyle}>★☆☆☆☆</div>
            : stars === 2 ? <div style={divStyle}>★★☆☆☆</div>
            : stars === 3 ? <div style={divStyle}>★★★☆☆</div>
            : stars === 4 ? <div style={divStyle}>★★★★☆</div>
            : <div style={divStyle}>★★★★★</div>
            } 
            
        </div>
        
    )
    
}

export default Rating;
