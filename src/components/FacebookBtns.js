import React from 'react'

function Btns(props) {
    return <button onClick={() => props.onCountry(props.profile.country)}>{props.profile.country}</button> 
}

export default Btns;