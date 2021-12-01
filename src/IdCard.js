import React from 'react'

export default function IdCard(props) {
    return (
        <div className="container">
            <img src={props.picture} alt="img"/>
            <div>
                <p><b>First name:</b>{props.firstName}</p>
                <p><b>Last name:</b>{props.lastName}</p>
                <p><b>Gender:</b>{props.gender}</p>
                <p><b>Height:</b>{props.height/100 + 'm'}</p>
                <p><b>Birth:</b>{props.birth}</p>
            </div>
        </div>
    )
}
