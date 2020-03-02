import React from 'react';

const IdCard = props => (
  <div className="idCard">
    <img src={props.picture} alt="student" />
    <article>
      <span>
        <strong>First name: </strong>
        {props.firstName}
      </span>
      <span>
        <strong>Last name: </strong>
        {props.lastName}
      </span>
      <span>
        <strong>Gender: </strong>
        {props.gender}
      </span>
      <span>
        <strong>Height: </strong>
        {props.height}
      </span>
      <span>
        <strong>Birth: </strong>
        {props.birth}
      </span>
    </article>
  </div>
);

export default IdCard;
