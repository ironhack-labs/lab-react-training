import React from 'react';

export default function IdCard(props) {
    return (
        <div className="id-card">
           <img src={props.picture} alt="profile picture"/> 
           <div className="id-card-description">
                <p><span>First name: </span>{props.firstName}</p>
                <p><span>Last name: </span>{props.lastName}</p>
                <p><span>Gender: </span>{props.gender}</p>
                <p><span>Height: </span>{props.height}</p>
                <p><span>Birth: </span>{props.birth.toLocaleDateString()}</p>
           </div>
        </div>
    )
}