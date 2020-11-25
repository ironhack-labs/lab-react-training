import React from 'react'
import '../styles/BoxColor.css';



const BoxColor = (props) => {

    const divStyle = {
     backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`,
   };
 
     return (
        <div style={divStyle} className="BoxColor">
            <span>rgb{props.r},{props.g},{props.b}</span>
        </div>
     );
 };
 
 export default BoxColor;