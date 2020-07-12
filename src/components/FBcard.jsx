import React from 'react'

export default function FBcard(props) {
    return (
        <div className="id-card" key={props.profile.lastName}>
            <div className="id-card__img">
                <img src={props.profile.img} alt="img"/>
            </div>
            <div className="id-card__info">
                <label><strong>First name:</strong>{props.profile.firstName}</label>
                <label><strong>Last name:</strong>{props.profile.lastName}</label>
                <label><strong>Country:</strong>{props.profile.country}</label>
                <label><strong>Type:</strong>
                    {props.profile.isStudent === true ? 'Student' : 'Teacher'}
                </label>

            </div>
        </div>
    )
}
