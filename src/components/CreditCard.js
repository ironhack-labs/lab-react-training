import React from 'react';

function CreditCard({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color
}) {
  const cardStyle = {
    backgroundColor: bgColor,
    color: color,
    width: '300px',
    padding: '20px',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    margin: '10px',
    boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.5)'
  };

  return (
    <div className="credit-card" style={cardStyle}>
      <div className="credit-card-type">{type}</div>
      <div className="credit-card-number">•••• •••• •••• {number.slice(-4)}</div>
      <div className="credit-card-expiration">
        Expires {expirationMonth}/{expirationYear}
      </div>
      <div className="credit-card-bank">{bank}</div>
      <div className="credit-card-owner">{owner}</div>
    </div>
  );
}

export default CreditCard;
