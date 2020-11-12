import React from 'react';

import "./BoxColor.css";

function BoxColor(props) {
return(
    <div className="boxcolor">
    <p style={{backgroundColor: `rgb(${props.r},${props.g},${props.b})` , padding: `30px`}}>rgb({props.r},{props.g},{props.b})</p> 
 </div>
 )
}

export default BoxColor;