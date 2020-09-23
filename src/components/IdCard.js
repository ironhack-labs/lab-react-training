import React from 'react'


export default function IdCard(props) {
    return (
        <div className ="id-card">
        <img src={props.picture} alt={`Profile of ${props.firstName} ${props.lastName}`}/>
        <article>
        <p><span className="title">Last Name:</span> {props.lastName}</p>
        <p> <span className="title">First Name:</span> {props.firstName}</p>
        <p> <span className="title">Gender:</span> {props.gender}</p>
        <p><span className="title">Height: </span>{props.height}</p>
        <p> <span className="title">Birth: </span>{props.birth.toString()}</p>
        </article>
        </div>
    );
}

