import React from 'react'

export default function CountryBtn(props) {
    const divStyle = {
        backgroundColor: props.value ? "lightblue" : "none"
    }

    return (
        <button style={divStyle}>
            {props.name}
        </button>
    )
}