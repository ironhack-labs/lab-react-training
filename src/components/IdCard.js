import React from 'react'
import './Components.css'

export default function IdCard(props) {
    //console.log(props.birth.toDateString())
    return (
        <div className="profile">
            <div className="profile-pic"><img src={props.picture} alt={props.firstName}picture/></div>
            <div>
            <p>First name: {props.firstName}</p>
            <p>Last name: {props.lastName}</p>
            <p>Gender: {props.gender}</p>
            <p>Height: {props.height}</p>
            <p>Birthdate: {props.birth.toDateString()}</p> 
            </div>
        </div>
    )
}
