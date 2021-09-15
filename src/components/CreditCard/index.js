import React from 'react';

import './style.css';

const CreditCard = ({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color,
}) => {
  return (
    <div className="card" style={{ background: bgColor, color: color }}>
      <div className="type">{type}</div>
      <div className="number">{number}</div>
      <div className="details">
        <p>{expirationMonth}</p>
        <p>{owner}</p>
        <p>{bank}</p>
      </div>
    </div>
  );
};

export default CreditCard;
