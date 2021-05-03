import React from 'react';
import './IdCard.css';

export default function (props) {
    return (
        <div className='container'>
            <img src={props.picture} />
            <div>
                <p><b>First name:</b> {props.firstName}</p>
                <p><b>Last Name:</b> {props.lastName}</p>
                <p><b>Gender</b> {props.gender}</p>
                <p><b>Height:</b> {props.height / 100 + 'm'}</p>
                <p><b>Birth:</b>{props.birth.toDateString()}</p>
            </div>
        </div>
    )
}