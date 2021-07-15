import React from 'react'

function BoxColor (props) {

    const backgroundColor = `rgb(${props.r},${props.g},${props.b})`

    return (

        <div style={{backgroundColor: backgroundColor}} > 
            <p>
                Hello
            </p>
        </div>

    )
}

export default BoxColor;

