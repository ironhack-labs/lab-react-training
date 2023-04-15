import React from "react";

function IdCard(props) {
  const fullName = `${props.firstName} ${props.lastName}`;
  const birthDate = props.birth.toDateString();

  return (
    <div className="IdCard">
      <img src={props.picture} alt={fullName} />
      <div>
        <p><strong>First name:</strong> {props.firstName}</p>
        <p><strong>Last name:</strong> {props.lastName}</p>
        <p><strong>Gender:</strong> {props.gender}</p>
        <p><strong>Height:</strong> {props.height} cm</p>
        <p><strong>Birth:</strong> {birthDate}</p>
      </div>
    </div>
  );
}

export default IdCard;
