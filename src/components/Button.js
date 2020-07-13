import React from 'react'

function Button(props) {
    return (
        <button className={props.class} key={props.theKey} style={{backgroundColor:`${props.style}`}} onClick={props.updateCountryFunction}>{props.country}</button>
    )
}

export default Button