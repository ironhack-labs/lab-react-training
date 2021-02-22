import React from 'react'

export default function IdCard(props) {
    return (
        <div>
            <h3>First name: {props.firstName}</h3>
            <h3>Last name: {props.lastName}</h3>
            <h3>Gender: {props.gender}</h3>
            <h3>Height: {props.height}</h3>
            <h3>Birth: {props.birth.toLocaleDateString()}</h3>
        </div>
    )
}