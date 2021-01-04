import React from 'react';

function IdCard(props) {
  return (
    <div className="box idCard">
      <img src={props.picture} />
      <div>
        <div>
          <strong>Firstname</strong>: {props.firstName}
        </div>
        <div>
          <strong>Lastname</strong>: {props.lastName}
        </div>
        <div>
          <strong>Gender</strong>: {props.gender}
        </div>
        <div>
          <strong>Height</strong>: {props.height}
        </div>
        <div>
          <strong>Birth</strong>: {props.birth.toString().slice(0, 15)}
        </div>
      </div>
    </div>
  );
}

export default IdCard;
