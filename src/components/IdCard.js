import React from 'react';

function IdCard(props) {
    return (
        <div className="id-card">
            <img src={props.picture} alt = "A person"/>
            <ul>
                <li>
                    <strong>First Name: </strong> {props.firstName}
                </li>
                <li>
                    <strong>Last Name: </strong> {props.lastName}
                </li>
                <li>
                    <strong>Gender: </strong> {props.gender}
                </li>
                <li>
                    <strong>Height: </strong> {props.height / 100} m
                </li>
                <li>
                    <strong>Birth: </strong> {props.birth.toDateString()}
                </li>
            </ul>
        </div>
    );
}

export default IdCard;