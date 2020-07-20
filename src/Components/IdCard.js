import React from 'react'

const UserCard = (props) => {
    return (
        <div className="idCard">
        <div className="pictures">
            <img src={props.picture} alt="img-utilisateur"/>
            </div>
        <div className="info-idcard">
            <p><b>First Name</b> : {props.firstName}</p>
            <p><b>Last Name</b> : {props.lastName}</p>
            <p><b>Gender</b> : {props.gender}</p>
            <p><b>Height</b> : {props.height/100}m</p>
            <p><b>Birth</b> : {props.birth.toDateString()}</p>
        </div>
        </div>
    )
}

export default UserCard;


