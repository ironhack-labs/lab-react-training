import React from 'react';

// function BoxColor (props) {
     
//         // let { r,g,b } = props;
//         return (
//           <div style={{ backgroundColor: `rgb(${props.r},${props.g},${props.b})` }}>
//           </div>
//         );
//       }

function BoxColor(props) {
    return (
        <div className="BoxColor"> 
            <div style={{backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`}}> rgb({props.r}, {props.g}, {props.b}) </div>
        </div>
    )
}  

export default BoxColor;