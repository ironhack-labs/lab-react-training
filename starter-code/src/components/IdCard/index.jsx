import React from 'react';

const IdCard = props => {
  return (
    <div className="student-info">
      <span>
        <strong>First Name</strong>
        {props.firstName}
        <strong>Last Name</strong>
        {props.lastName}
        <strong>Gender</strong>
        {props.gender}
        <strong>Height</strong>
        {props.height}
        <strong>Birth</strong>
        {props.birth.toLocaleString()}
        <strong>Picture</strong>
        <img src={props.picture} alt="" />
      </span>
    </div>
  );
};

export default IdCard;
