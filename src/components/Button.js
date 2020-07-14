import React from 'react'

function Button(props) {
    return (
        <button style={props.style} onClick={props.updateCountryFunction}>{props.country}</button>
    )
}

export default Button