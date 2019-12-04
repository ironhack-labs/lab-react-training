import React from "react";

const IdCard = props => {
  return (
    <div className="container">
      <img className="idimage" src={props.picture}></img>
      <div>
        <p>First Name: {props.firstName} </p>
        <p>Last Name: {props.lastName} </p>
        <p>Gender: {props.gender} </p>
        <p>Heigth: {props.height} </p>
        <p>
          Birth:{" "}
          {props.birth.getDate() +
            "/" +
            props.birth.getMonth() +
            "/" +
            props.birth.getFullYear()}{" "}
        </p>
      </div>
    </div>
  );
};

export default IdCard;
