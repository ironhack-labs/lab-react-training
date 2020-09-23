import React from 'react';
import '../App.css';

export default function IdCard(props) {
  return (
    <div className="profile-card">
      <div className="profile-pic">
        <img src={props.picture} alt="" />
      </div>
      <div className="profile-details">
        <p className="profile-text">
          <b>First name:</b> {props.firstName}
        </p>
        <p className="profile-text">
          <b>Last name:</b> {props.lastName}
        </p>
        <p className="profile-text">
          <b>Gender:</b> {props.gender}
        </p>
        <p className="profile-text">
          <b>Height:</b> {props.height}
        </p>
        <p className="profile-text">
          <b>Birth:</b> {props.birth.toDateString()}
        </p>
      </div>
    </div>
  );
}
