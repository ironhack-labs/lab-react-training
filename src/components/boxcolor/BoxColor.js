import React from 'react';


function BoxColor (props) {
    const redBox = {
           backgroundColor: 'red'
    };

    const greenBox = {
        backgroundColor: 'green'
    }
    
   return (
        <div className="BoxColor" style={redBox}>Box colors</div>
    )
    
}


export default BoxColor


