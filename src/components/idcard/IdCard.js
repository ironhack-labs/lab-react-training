import React from 'react';
import style from './IdCard.module.css';

function IdCard(props) {
    return (
        <div className={style.card__id}>
            <img src={props.user.picture} alt="user"></img>
            <div>
                <p><strong>First name:</strong> {props.user.firstName}</p>
                <p><strong>Last name:</strong> {props.user.lastName}</p>
                <p><strong>Gender:</strong> {props.user.gender}</p>
                <p><strong>Height:</strong> {props.user.height}</p>
                <p><strong>Birth:</strong> {props.user.birth}</p>
            </div>
        </div>
    )
}

export default IdCard