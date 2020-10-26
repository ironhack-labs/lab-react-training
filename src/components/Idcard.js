import React from 'react';

const IdCard = (props) => {
  return (
    <div className="card">
      <li>Last Name {props.lastName}</li>
      <li>First Name {props.firstName}</li>
      <li>Height {props.height}</li>
      <img src={props.picture} alt="card-logo" />
    </div>
  );
};

export default IdCard;
