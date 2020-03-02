import React, { Component } from 'react';

import './style.scss';

const CreditCard = props => {
  const style = {
    height: '180px',
    width: '300px',
    backgroundColor: `${props.bgColor}`,
    color: `${props.color}`
  };
  let { type, number, expirationMonth, expirationYear, bank, owner } = props;
  number = number.substring(12);
  return (
    <div style={style} className="Credit-Cards">
      <h2 className="type-CreditCard">{type}</h2>
      <h3 className="number-CreditCard">{number}</h3>
      <p>
        Expires {expirationMonth}/{expirationYear} {bank}
      </p>
      <p>{owner}</p>
    </div>
  );
};

export default CreditCard;
