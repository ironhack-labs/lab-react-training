import React from 'react';
import "./../styles/Id.css";

function IdCard(props) {
    return (
        <div id="idCard">
            <img src={props.picture} alt="profile-picture" ></img>
            <div id="idInfos" >
                <p><b>Last name:</b> {props.lastName}</p>
                <p><b>FirstName:</b> {props.firstName}</p>
                <p><b>Gender:</b> {props.gender}</p>
                <p><b>Height:</b> {props.height}</p>
                <p><b>Birth:</b> {props.birth}</p>
            </div>
        </div>
    );
}

export default IdCard
