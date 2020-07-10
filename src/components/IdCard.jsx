import React from 'react'

export default function IdCard(props) {
    return (
        <div className="id-card">
            <div className="id-card__img">
                <img src={props.picture} alt="img"/>
            </div>
            <div className="id-card__info">
                <label><strong>First name:</strong>{props.firstName}</label>
                <label><strong>Last name:</strong>{props.lastName}</label>
                <label><strong>Gender:</strong>{props.gender}</label>
                <label><strong>Height:</strong>{props.height}</label>
                <label><strong>Birth:</strong>{props.birth}</label>
            </div>
        </div>
    )
}
