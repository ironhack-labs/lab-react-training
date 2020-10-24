import React from 'react';



export default function BoxColor(props){
    
    let color = { 
        backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`
    }
    
    return(
        <div className='BoxColor' style={color}>
            <p>rgb({props.r},{props.g},{props.b})</p>
        </div>
    )
}