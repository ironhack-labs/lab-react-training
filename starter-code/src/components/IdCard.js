import React from "react";

function IdCard(props) {
    return (
        <header id="header">
            <div>
                <img src={props.picture} alt="" />
            </div>
            <p> First Name: {props.lastName}</p>
            <p> Last Name: {props.firstName}</p>
            <p> Gender: {props.gender}</p>
            <p> Height: {props.height}</p>
            <p> Birth: {props.birth.toLocaleString()}</p>

        </header>
    );
}

export default IdCard;