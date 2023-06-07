import React from 'react';
import visa from '../assets/images/visa.png';

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
  const last4Num = () => number.slice(-4);
  const last2Num = () => expirationYear.toString().slice(-2);
  const divStyle = {
    backgroundColor: `${bgColor}`,
    color: `${color}`,
    borderRadius: '5px',
    padding: '10px',
    width: '230px',
    height: '120px',
    margin: '10px',
  };

  return (
    <div className="creditCard" style={divStyle}>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <img width="60px" height="20px" src={visa} alt="Visa" />
      </div>
      <div
        style={{
          fontSize: '25px',
          display: 'flex',
          justifyContent: 'center',
          margin: '10px',
        }}
      >
        <b style={{ fontSize: '30px' }}>···· ···· ···· </b> {last4Num()}
      </div>
      <div style={{ fontSize: '14px' }}>
        <span style={{ marginRight: '30px' }}>
          Expires {expirationMonth}/{last2Num()}
        </span>
        <span>{bank}</span>
      </div>
      <div style={{ fontSize: '14px' }}>{owner}</div>
    </div>
  );
}

export default CreditCard;
