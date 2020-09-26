import React from 'react'
import './Greetings.css'

export default function Greetings(props) {

    return (
    <div className="IdCard">
        <img src={props.picture} alt="" />
        <div className="right">
        <strong>First name</strong>: {props.firstName} <br />
        <strong>Last name</strong>: {props.LastName} <br />
        <strong>Gender</strong>: {props.gender} <br />
        <strong>Height</strong>: {props.height} cm<br />
        <strong>Birth</strong>: {props.birth.toDateString()} <br />  
    </div>
    </div>          
    )
}
