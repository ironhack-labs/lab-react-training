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
  const cardStyle = {
    backgroundColor: bgColor,
    color: color,
    padding: '20px',
    margin: '20px',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '300px',
    height: '180px',
  };

  const cardTypeStyle = {
    marginBottom: '10px',
    fontSize: '24px',
  };

  const cardNumberStyle = {
    marginBottom: '10px',
    fontSize: '20px',
    letterSpacing: '4px',
  };

  const cardExpirationStyle = {
    fontSize: '14px',
  };

  const cardBankStyle = {
    fontSize: '16px',
    fontWeight: 'bold',
  };

  const cardOwnerStyle = {
    fontSize: '16px',
  };

  return (
    <div style={cardStyle}>
      <div style={cardTypeStyle}>{type}</div>
      <div style={cardNumberStyle}>**** **** **** {number.slice(-4)}</div>
      <div style={cardExpirationStyle}>
        Expires: {expirationMonth}/{expirationYear.toString().slice(-2)}
      </div>
      <div style={cardBankStyle}>{bank}</div>
      <div style={cardOwnerStyle}>{owner}</div>
    </div>
  );
}

export default CreditCard;
