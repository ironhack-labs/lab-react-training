import React from 'react';

const IdCard = (props) => {
  return (
    <div className="IdCard">
      <img
        className="IdCard-Img"
        src={props.picture}
        alt="{props.firstName}"
      ></img>
      <div className="IdCard-Right">
        <p>
          <strong>First name:</strong> {props.firstName}
        </p>
        <p>
          <strong>Last name:</strong> {props.lastName}
        </p>
        <p>
          <strong>Gender:</strong> {props.gender}
        </p>
        <p>
          <strong>Height:</strong> {props.height}
        </p>
        <p>
          <strong>Birth:</strong> {props.birth}
        </p>
      </div>
    </div>
  );
};

export default IdCard;
