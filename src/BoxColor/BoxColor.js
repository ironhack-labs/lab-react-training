import React from 'react'

const BoxColor = (props) => {
   const boxStyle = {backgroundColor:`RGB(${props.r}, ${props.g}, ${props.b})`, height:"100px", width:"100px"}

    return (
             <div style={boxStyle}></div>
       
    )
}

export default BoxColor
