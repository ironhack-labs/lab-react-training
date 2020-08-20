import React from 'react'

function IdCard(props) {
    return (
        <div className="id-card">
            <div className="id-img">
                <img src={props.picture} alt="contact-pic"></img>
            </div>
            <div className="id-text">
                <p><strong>First name:</strong>  {props.firstName}</p>
                <p><strong>Last name:</strong>  {props.lastName}</p>
                <p><strong>Gender:</strong>  {props.gender}</p>
                <p><strong>Height:</strong> {props.height / 100}m</p>
                <p><strong>Birth:</strong> {props.birth}</p>
            </div>
        </div>
    )
}

export default IdCard;