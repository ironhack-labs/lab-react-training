import React from "react"



function BoxColor(props){

    let color= `rgb(${props.r},${props.g},${props.b})`

    let myStyle = {
        width: "250px",
        height: "150px",
        border: "1px solid black",
        backgroundColor: color
    }


    return ( 
        <div style={myStyle}>
            <p>rgb({props.r},{props.g},{props.b})</p>
        </div>       
        
    )
}


export default BoxColor