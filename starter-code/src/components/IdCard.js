import React from "react";

// import "../../public/style.css";

export default function IdCard(props) {
  return (
    <div className="flex box">
      <div className="user-photo">
        <img src={props.picture} alt="user" />
      </div>
      <div>
        <p>
          <strong>First Name: </strong>
          {props.firstName}
        </p>
        <p>
          <strong>Last Name: </strong>
          {props.lastName}
        </p>
        {props.country && (
          <p>
            <strong>Country: </strong>
            {props.country}
          </p>
        )}
        {props.type && (
          <p>
            <strong>Type: </strong>
            {props.type}
          </p>
        )}
        {props.gender && (
          <p>
            <strong>Gender: </strong>
            {props.gender}
          </p>
        )}
        {props.height && (
          <p>
            <strong>Height: </strong>
            {props.height}
          </p>
        )}

        {props.birth && (
          <p>
            <strong>Birth: </strong>
            {props.birth.toString()}
          </p>
        )}
      </div>
    </div>
  );
}
