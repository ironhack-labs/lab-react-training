import React from 'react';
import './IdCard.css';

const IdCard = (props) => {
    return (
        <div className="idCard">
            <img src={props.picture} alt="{props.firstName}" />
            <div className="profile">
                <h5>First Name: {props.firstName}</h5>
                <h5>Last Name: {props.lastName}</h5>
                <h5>Gender: {props.gender}</h5>
                <h5>Height: {props.height}</h5>
                <h5>Birth: {props.birth}</h5>
            </div>
        </div>
    )
}

export default IdCard