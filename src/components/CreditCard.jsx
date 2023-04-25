import React from 'react';

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
  const maskedNumber = '.'.repeat(12) + number.slice(-4);
  return (
    <div>
      <p>{type}</p>
      <p>{maskedNumber}</p>
      <p>
        <div>
          Expires {expirationMonth}/{expirationYear}
        </div>
        <div>{bank}</div>
      </p>
      <p>{owner}</p>
    </div>
  );
};

export default CreditCard;
