import React from 'react'
import "../styles/idCard.css";

function IdCard(props) {
    const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const birthDay = days[props.birth.getDay()]
    const birthMonth = months[props.birth.getMonth()]
    return (
        
        <div className="Box">
            <img src={props.picture} alt="portrait" />
            <ul>
                <li><b>First Name:</b> {props.lastName}</li>
                <li><b>Last Name:</b> {props.firstName}</li>
                <li><b>Gender:</b> {props.gender}</li>
                <li><b>Height:</b> {props.height}</li>
                <li><b>Birth:</b> {birthDay} {birthMonth} {props.birth.getDate()} {props.birth.getFullYear()}</li>
            </ul>
        </div>
    )
}

export default IdCard
