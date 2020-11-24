import React from 'react'
import '../styles/BoxColor.css';

function BoxColor (props){
    function color (r,g,b){
    let elements = [r,g,b]    
    let result = elements.concat(props.r + props.g + props.b);
    return result;

    }
    return(
    <div className = "BoxColor">
       <p style={{backgroundColor: props.color}}>rgb({props.r},{props.g},{props.b})</p>
    </div>
)
}

export default BoxColor;