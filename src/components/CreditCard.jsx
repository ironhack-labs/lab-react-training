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

  const style = {
    backgroundColor:`${bgColor}`,
    color: `${color}`
  }
  return (
    <div style={style}>
      <h3>{type}</h3>
      <p>
        **** **** **** {number.slice(12)}
      </p>
      <p>
        Expires: {expirationMonth}/{expirationYear}
      </p>
      <p>{bank}</p>
      <p>{owner}</p>
    </div>
  );
}

export default CreditCard;
