import React from 'react';

const IdCard = (props) => {
  return (
    <div className="idCard">
      <img src={props.picture} alt="{props.lastName}'s pic" />
      <ul>
        <li>
          <span>First name: </span>
          {props.firstName}
        </li>
        <li>
          <span>Last name: </span>
          {props.lastName}
        </li>
        <li>
          <span>Gender: </span>
          {props.gender}
        </li>
        <li>
          <span>Height: </span>
          {props.height}
        </li>
        <li>
          <span>Birth: </span>
          {props.birth.toString().slice(0, 16)}
        </li>
      </ul>
    </div>
  );
};

export default IdCard;
