import React from 'react';

function IdCard(props) {
  return (
    <div className="idcard">
      <img src={props.picture} alt="" />
      <div>
        <div>
          <b>Last name:</b>
          {props.lastName}
        </div>
        <div>
          <b>First name:</b>
          {props.firstName}
        </div>
        <div>
          <b>Gender:</b>
          {props.gender}
        </div>
        <div>
          <b>Height:</b>
          {props.height}
        </div>
        <div>
          <b>Birthday:</b>
          {props.birth.toDateString()}
        </div>
      </div>
    </div>
  );
}

export default IdCard;
