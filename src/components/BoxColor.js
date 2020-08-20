import React from 'react'
import './components.css'

function BoxColor(props){

    let color= `rgb(${props.r},${props.g},${props.b})`

    let myStyle = {
        width: "200px",
        height: "70px",
        border: "1px solid black",
        backgroundColor: color
    }

    
    let pStyle = {
        textAlign: "center"
    }

    return ( 
        <div style={myStyle}>
            <p style={pStyle}>rgb({props.r},{props.g},{props.b})</p>
        </div>       
        
    )
}

export default BoxColor;