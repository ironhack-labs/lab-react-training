import React from 'react'

export default function IdCard(props) {
    return (
        <div>
            <p>First name: {props.firstName}</p>
            <p>Last name: {props.lastName}</p>
            <p>Gender: {props.gender}</p>
            <p>Height: {props.height}</p>
            <p>Birth: {props.birth.toLocaleDateString()}</p>
        </div>
    )
}
