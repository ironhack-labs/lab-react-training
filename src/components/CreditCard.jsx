import React from 'react';

import './CreditCard.css';

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
  const style = {
    backgroundColor: `${bgColor}`,
    color: `${color}`,
  };

  return (
    <div className="creditCard" style={style}>
      <span className="type">{type}</span>
      <h3 className="number">
        &#x2022;&#x2022;&#x2022;&#x2022; &#x2022;&#x2022;&#x2022;&#x2022;
        &#x2022;&#x2022;&#x2022;&#x2022; {number.slice(-4)}
      </h3>

      <div className="exp-bank">
        <span>
          Expires{' '}
          {String(expirationMonth).length < 2
            ? `0${expirationMonth}`
            : expirationMonth}
          /{String(expirationYear).slice(2)}
        </span>
        <span>
          {'    '}
          {bank}
        </span>
      </div>
      <span>{owner}</span>
    </div>
  );
};

export default CreditCard;
