import React from 'react';
import './CreditCard.css';

function CreditCard(props) {
  function cardNumbers(num) {
    return '**** **** **** ' + num.substring(12, 16);
  }

  return (
    <div className="allCards">
      <div
        style={{ backgroundColor: `${props.bgColor}`, color: `${props.color}` }}
        className="card"
      >
        <p className="info">{props.type}</p>
        <p className="number">{cardNumbers(props.number)}</p>
        <p>
          Expires{' '}
          {props.expirationMonth < 10
            ? `0${props.expirationMonth}`
            : props.expirationMonth}
          /{props.expirationYear} {props.bank}
        </p>
        <p>{props.owner}</p>
      </div>
    </div>
  );
}

export default CreditCard;
