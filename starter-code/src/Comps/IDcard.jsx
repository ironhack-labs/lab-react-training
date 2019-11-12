import React from "react";

export default function IDcard(props) {
  return (
    <div className="idBox">
      <div className="divx">
        <img className="imgC" src={props.picture} alt={props.firstName} />
      </div>
      <div className="divx">
        <b>First Name:</b> {props.firstName} <br />
        <b>Last Name:</b> {props.lastName} <br />
        <b>Gender:</b> {props.gender} <br />
        <b>Height:</b> {props.height} <br />
        <b>Birth:</b> {props.birth}
      </div>
    </div>
  );
}
