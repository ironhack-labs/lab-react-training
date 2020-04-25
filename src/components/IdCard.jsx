import React from "react";

export default function IdCard(props) {
  return (
    <div className="flex">
      <div>
        <img src={props.picture} alt="the Person"></img>
      </div>
      <ul>
          <li><strong>Last name:</strong> {props.lastName}</li>
          <li><strong>Firs name:</strong> {props.firstName}</li>
          <li><strong>Gender:</strong> {props.gender}</li>
          <li><strong>Height:</strong> {props.height}</li>
          <li><strong>Birth:</strong> {props.birth}</li>
      </ul>
    </div>
  );
}

