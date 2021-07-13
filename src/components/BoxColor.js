import React from 'react';

function BoxColor (props){

    const bgc = `rgb(${props.r}, ${props.g}, ${props.b})`
    return(
        
        <div style={{backgroundColor: bgc}} > 
            <p>
                rgb(255,0,0)
                #ff0000
            </p>
        </div>
    )
}
export default BoxColor

