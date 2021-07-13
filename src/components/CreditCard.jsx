import React from 'react';

const creditCard = (props) => {
  return (
    <div
      style={{
        width: '350px',
        height: '200px',
        backgroundColor: props.bgColor,
        color: props.color,
      }}
      className=" text-xl my-4 p-6"
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
