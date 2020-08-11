import React from 'react';
import './CreditCard.css';

const CreditCard = (props) => {
  const divStyle = {
    backgroundColor: props.bgColor,
    color: props.color,
  };
  return (
    <div className="container-credit-card" style={divStyle}>
      <div className="visaimg">
        {props.type === 'Visa' && <img src="/img/visa.png" />}
        {props.type === 'Master Card' && <img src="/img/master-card.svg" />}
      </div>
      <div className="number">
        <p>•••• •••• ••••{props.number.substr(-4)}</p>
      </div>
      <div className="info">
        <p>
          Expires {props.expirationMonth}/
          {props.expirationYear.toString().substr(-2)}
        </p>
        <p>{props.bank}</p>
      </div>
      <div className="owner">
        <p>{props.owner}</p>
      </div>
    </div>
  );
};

export default CreditCard;
