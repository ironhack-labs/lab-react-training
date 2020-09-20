import React from 'react';
import './IdCard.css';

const IdCard = (props) => {
    return (<article className="idCard">
    <img src={props.picture}></img>
    <div>
        <p>
            <b>First Name:</b> {props.firstName}
        </p>
        <p>
            <b>Last Name:</b> {props.lastName}
        </p>
        <p>
            <b>Gender:</b> {props.gender}
        </p>
        <p>
            <b>Height:</b> {props.height}
        </p>
        <p>
            <b>Birth:</b> {props.birth.toLocaleDateString('es-ES')}
        </p>
        <p>
        </p>
    </div>
    </article>)
}

export default IdCard;