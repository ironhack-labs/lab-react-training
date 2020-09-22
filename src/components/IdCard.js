import React from 'react'


export default function IdCard(props) {
    return (
        <div className ="id-card">
        <img src={props.picture} alt={`Profile of ${props.firstName} ${props.lastName}`}/>
        <article>
        <p>lastName: {props.lastName}</p>
        <p>firstName: {props.firstName}</p>
        <p> gender: {props.gender}</p>
        <p>height: {props.height}</p>
        <p> birth: {props.birth.toString()}</p>
        <p>{props.picture}</p>
        </article>
        </div>
    );
}

