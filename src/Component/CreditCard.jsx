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
  const changeNumber = number.replace(/.(?=.{4})/g, '#');
  console.log(changeNumber);

  const creditCardStyle = {
    color: `${color}`,
    backgroundColor: `${bgColor}`
  }

  return <div className="visaCreditCard" style={creditCardStyle}>
  <p>{type}</p>
  <p>{changeNumber}</p>
  <p>{expirationMonth}</p>
  <p>{expirationYear}</p>
  <p>{bank}</p>
  <p>{owner}</p>
  </div>
};

export default CreditCard;
