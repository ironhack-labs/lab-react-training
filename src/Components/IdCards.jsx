import React from 'react';
import "../App.css";
function IdCards(props) {
    return (
        <div className="IdCard">
            <div className="OneCardComplete">
                <img className="OneCard" src={props.picture} alt="photoCV"/>
            </div>
                <ul className="CardInfo">
                    <li><strong>First name:</strong> {props.firstName}</li>
                    <li><strong>Last name:</strong> {props.lastName}</li>
                    <li><strong>Gender:</strong> {props.gender}</li>
                    <li><strong>Height:</strong> {props.height}</li>
                    <li><strong>Birth: </strong>{props.birth}</li>
                </ul><strong></strong>
        </div>
    );
}

export default IdCards
