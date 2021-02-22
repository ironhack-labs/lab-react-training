import React from 'react'

export default function IdCard(props) {
    return (
        <div>
            <h1>First name: {props.firstName}</h1>
            <h1>Last name: {props.lastName}</h1>
            <h1>Gender: {props.gender}</h1>
            <h1>Height: {props.height}</h1>
            <h1>Birth: {props.birth.toLocaleDateString()}</h1>
        </div>
    )
}
