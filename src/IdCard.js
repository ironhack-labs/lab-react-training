import React from 'react'

export default function IdCard(props) {
    //console.log(props.birth)
    return (
        <div>
            <img src={props.picture} alt=""/>
            <p>Last Name: {props.lastName}</p>
            <p>First Name: {props.firstName}</p>
            <p>Gender: {props.gender}</p>
            <p>Height: {props.height}</p>
            <p>Birth: {props.birth.toDateString()}</p>
        </div>
    )
}
