import React from 'react';

const IdCard = props => {
    return (
        <div>
            <div>
                <b>First name:</b>
                <span>{props.firstName}</span>
            </div>
            <div>
                <b>Last Name:</b>
                <span>{props.lastName}</span>
            </div>
            <div>
                <b>Gender:</b>
                <span>{props.gender}</span>
            </div>
            <div>
                <b>Height:</b>
                <span>{props.height}</span>
            </div>
            <div>
                <b>Date of Birth:</b>
                <span>{props.dob.toString()}</span>
            </div>
            
            <img src={props.picture} alt="icon" />
            
        </div>
    )
}

export default IdCard;