import React from 'react';

const IdCard = (props) => {
  return (
    <div className="box">
      <div className="col">
        <img
          className="profile_picture"
          src={props.picture}
          alt={props.firstName}
        />
      </div>
      <div className="col">
        <ul>
          <li>
            <span className="tag">First name:</span> {props.firstName}
          </li>
          <li>
            <span className="tag">Last name:</span> {props.lastName}
          </li>
          <li>
            <span className="tag">Gender:</span> {props.gender}
          </li>
          <li>
            <span className="tag">Height:</span> {props.height}
          </li>
          <li>
            <span className="tag">Birth:</span> {props.birth}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default IdCard;
