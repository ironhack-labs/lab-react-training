import React from 'react'

export default function IdCard(props) {
    return (
        <>
        <div>
        <img src={props.picture} alt={props.firstName}/>
        <p>Last Name: {props.lastName}</p>
        <p>First Name:{props.firstName}</p>
        <p>Gender: {props.gender}</p>
        <p>Height: {props.height}</p>
        <p>Birth: {props.birth.toLocaleDateString()}</p>
        </div>
        </>
    )
}
