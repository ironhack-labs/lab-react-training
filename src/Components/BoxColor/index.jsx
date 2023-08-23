/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

function BoxColor(props){
    const divStyling = {
        backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`,
        width: '300px',
        height: '300px',
        border: '1px solid black',
    }

    return (
        <div style= {divStyling}> RGB({props.r}, {props.g}, {props.b})</div>
    )
}

export default BoxColor;