import React from "react";
import "./IdCard.css";

export default function IdCard(props) {
  return (
    <div>
      <div className="idcard">
        <img src={props.picture} alt="" />
        <div className="idcard-props">
          <p>
            <strong>First Name:</strong> {props.firstName}
          </p>
          <p>
            <strong>Last Name:</strong> {props.lastName}
          </p>
          <p>
            <strong>Gender:</strong> {props.gender}
          </p>
          <p>
            <strong>Height:</strong> {props.height}
          </p>
          <p>
            <strong>Birth:</strong> {props.birth.toDateString()}
          </p>
        </div>
      </div>
    </div>
  );
}
