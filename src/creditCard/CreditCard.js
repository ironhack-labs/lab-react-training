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

  const year = expirationYear % 2000;
  const month = expirationMonth < 10 ? '0' + expirationMonth : expirationMonth;

  return (
    <div
      style={{
        backgroundColor: bgColor,
        color: color,
        borderRadius: 10,
        width: '300px',
        height: '150px',
        padding: '20px',
        margin: '20px',
      }}
    >
      <img width="60" src={type} alt="" />
      <p>•••• •••• •••• {number.substr(-4)}</p>
      <p style={{ fontSize: '10px' }}>
        Expires {month}/{year} {bank}
      </p>
      <p style={{ fontSize: '10px' }}>{owner}</p>
    </div>
  );
}

export default CreditCard;
