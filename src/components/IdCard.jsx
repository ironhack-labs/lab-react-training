import React from 'react';

const IdCard = (props) => {
  const birthdate = props.birth.toLocaleString();
  return (
    <div className="idCard">
      <h4>{props.lastName}</h4>
      <h4>{props.firstName}</h4>
      <h4>{props.gender}</h4>
      <h4>{props.height}</h4>
      <h4>Birth:{birthdate}</h4>
      <img src={props.picture} alt="" />
    </div>
  );
};

export default IdCard;
