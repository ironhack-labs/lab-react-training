import React from 'react';

const creditCard = (props) => {
  return (
    <div
      style={{
        width: '400px',
        height: '350px',

        backgroundColor: props.bgColor,
        color: props.color,
      }}
    >
      <p>{props.type}</p>
      <p>{props.number}</p>
      <p>{props.expirationMonth}</p>
      <p>{props.expirationYear}</p>
      <p>{props.bank}</p>
      <p>{props.owner}</p>
    </div>
  );
};

export default creditCard;
