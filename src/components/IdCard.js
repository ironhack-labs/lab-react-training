import React from 'react';

function IdCard(props) {
  return (
    <div>
      <ul>
        <li>
          <strong>First Name: </strong>
          {props.firstName}
        </li>
        <li>
          <strong>Last Name: </strong>
          {props.lastName}
        </li>
        <li>
          <strong>Gender: </strong>
          {props.gender}
        </li>
        <li>
          <strong>Height: </strong>
          {props.height}
        </li>
        <li>
          <strong>Birth: </strong>
          {props.birth.toDateString()}
        </li>
      </ul>
      <img src={props.picture} />
    </div>
  );
}

export default IdCard;
