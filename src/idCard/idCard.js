import React from 'react';

function IdCard(props) {
  return (
    <div>
      User is:
      <div>{props.lastName}</div>
      <div>{props.firstName}</div>
      <div>{props.gender}</div>
      <div>{props.height}m</div>
      <div>{props.birth}</div>
      <div>{props.picture}</div>
    </div>
  );
}

export default IdCard;
