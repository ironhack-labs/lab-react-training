import React from 'react';

function BoxColor (props){

    const bgc = `rgb(${props.r}, ${props.g}, ${props.b})`

    const boxstyle = {
        height: "120px",
        border: "2px solid black",
        textAlign: "center",
        marginTop: "10px",
        fontSize: "2em",
        backgroundColor: bgc
      
    }

    return(
        
        <div style={boxstyle}> 
            <p>
                rgb({props.r}, {props.g}, {props.b})
            </p>
        </div>
    )
}
export default BoxColor

