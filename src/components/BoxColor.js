import React from 'react'


function BoxColor(props){

    let divStyle = {
        backgroundColor: `rgb(${props.r},${props.g},${props.b})`,
        height: '100px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      };

    return (
        <div className='container' style={divStyle}>
            rgb({props.r}, {props.g}, {props.b})
        </div>
    )
}

export default BoxColor