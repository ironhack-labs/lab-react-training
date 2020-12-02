import React from 'react';

export default function Iteration1(props) {
  return (
    <div className="Profile" style={{ border: 'solid 1px', display: 'flex' }}>
      <div className="Profile-Pic">
        <img src={props.img}></img>
      </div>
      <div className="Profile-Details">
        <p>
          <strong>First name: </strong>
          {props.lastName}
        </p>
        <p>
          <strong>Last Name: </strong>
          {props.firstName}
        </p>
        <p>
          <strong>Gender: </strong>
          {props.gender}
        </p>
        <p>
          <strong>Height: </strong>
          {props.height}
        </p>
        <p>
          <strong>Birth: </strong>
          {props.birth.toDateString()}
        </p>
      </div>
    </div>
  );
}
