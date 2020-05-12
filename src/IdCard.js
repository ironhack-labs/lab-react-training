import React from "react";

function IdCard(props) {
    return (
        <div className="IdCard">
            <div className="CardPhoto">
                <img src={props.photo} alt={props.name} />
            </div>
            <div className="CardData">
                <span className="CardDataLabel">First name: </span>{props.name}<br/>
                <span className="CardDataLabel">Last name: </span>{props.lastName}<br/>
                <span className="CardDataLabel">Gender: </span>{props.gender}<br/>
                <span className="CardDataLabel">Height: </span>{props.height}<br/>
                <span className="CardDataLabel">Birth: </span>{props.birth}<br/>
            </div>
        </div>
    );
}

export default IdCard;