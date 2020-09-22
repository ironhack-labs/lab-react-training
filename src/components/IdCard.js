import React from 'react'
import './Components.css'

export default function IdCard(props) {
    //console.log(props.birth.toDateString())
    return (
        <div className="profile">
            <div className="profile-pic"><img src={props.picture} alt={props.firstName}picture/></div>
            <div className="profile-textinfo">
            <p class="profile-text"><b>First name:</b> {props.firstName}</p>
            <p class="profile-text"> <b>Last name:</b> {props.lastName}</p>
            <p class="profile-text"><b>Gender:</b> {props.gender}</p>
            <p class="profile-text"> <b>Height:</b> {props.height}</p>
            <p class="profile-text"> <b>Birthdate:</b> {props.birth.toDateString()}</p> 
            </div>
        </div>
    )
}
