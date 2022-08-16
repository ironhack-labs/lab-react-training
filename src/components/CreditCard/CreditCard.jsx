import React from 'react';

function CreditCard(props) {
  const {
    type,
    number,
    expirationMonth,
    expirationYear,
    bank,
    owner,
    bgColor,
    color,
  } = props;

  return (
    <div
      style={{
        backgroundColor: `${bgColor}`,
        color: `${color}`,
      }}
    >
      <p>{type}</p>
      <p>{number}</p>
      <p>{expirationMonth}</p>
      <p>{expirationYear}</p>
      <p>{bank}</p>
      <p>{owner}</p>
      <hr></hr>
    </div>
  );
}

export default CreditCard;
