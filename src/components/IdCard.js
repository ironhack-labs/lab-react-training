import React from 'react';
import './IdCard.css';

const IdCard = (props) => {
  return (
    <div className="id-card">
      <div className="card-img" key={props.lastNames}>
        <img src={props.picture} alt="avatar" />
      </div>
      <div className="card-data">
        <ul>
          <li>
            <b>First Name:</b> {props.firstName}
          </li>
          <li>
            <b>Last Name:</b> {props.lastName}
          </li>
          <li>
            <b>Gender:</b> {props.gender}
          </li>
          <li>
            <b>Height:</b> {props.height}
          </li>
          <li>
            <b>Birth:</b> {props.birth}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default IdCard;
