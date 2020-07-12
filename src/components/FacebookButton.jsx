import React from 'react'

const FacebookButton = (props) => {
    return (
        <button onClick={props.selectProfiles}>{props.country}</button>
    )
}

export default FacebookButton
