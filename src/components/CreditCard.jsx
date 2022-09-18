import React from 'react';

function CreditCard({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color,
}) {
  return (
    <div style={{ background: bgColor, width: '20rem', height: '12rem' }}>
      <div>{type}</div>
      <div>{number}</div>
      <div>
        Expires:{expirationMonth}/{expirationYear}
        <span>{bank}</span>
      </div>
      <div>{owner}</div>
    </div>
  );
}

export default CreditCard;