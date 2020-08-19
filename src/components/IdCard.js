import React from 'react'

function IdCard(props){
    return (
        <div className="id-card">
            <img src={props.picture} alt=""/>
            <div className="id-card-info">
            <p><span>First Name:</span> {props.firstName}</p>
            <p><span>Last Name:</span> {props.lastName}</p>
            <p><span>Gender:</span> {props.gender}</p>
            <p><span>Height:</span> {props.height}m</p>
            <p><span>Birth:</span> {props.birth.getDate()}.{props.birth.getMonth() +1}.{props.birth.getFullYear()}</p>
            </div>
        </div>
    )
}

export default IdCard