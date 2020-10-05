import React from 'react';

const IdCard = (props) => {
  return (
    <div className="idCard">
      <div className="innerCard">
        <img srcSet={props.picture} alt="" />
      </div>
      <div className="innerCard">
        <p>
          <b>First name:</b> {props.firstName} <br/>
          <b>Last name</b>: {props.lastName}  <br/>
          <b>Gender</b>: {props.gender} <br/>
          <b>Height</b>: {props.height} <br/>
          <b>Birth</b>: {props.birth.toString()}
        </p>
      </div>
    </div>
  );
};

export default IdCard;
