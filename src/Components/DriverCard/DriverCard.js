import React from 'react';

export default function CreditCard({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color,
}) {
  const boxStyle = {
    'background-color': bgColor,
    height: '200px',
    width: '300px',
    margin: '10px',
  };

  return (
    <div style={boxStyle}>
      <p>{type}</p>
      <p>{number.slice(-4)}</p>
      <p>
        Expires {expirationMonth}/{expirationYear} {bank}
      </p>

      <p>{owner}</p>
    </div>
  );
}
