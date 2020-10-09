import React from 'react';
import masterCardLogo from '../assets/img/master-card.svg';

function CreditCard(props) {
  function hideCardNumber(cardNumber) {
    const dotArray = [...Array(4)].map((el) => String.fromCharCode(9899));

    return (
      <p>
        <small>{[...Array(3)].map((el) => dotArray.join('')).join(' ')}</small>
        {cardNumber.substr(-4)}
      </p>
    );
  }

  return (
    <div
      className="credit-card"
      style={{ backgroundColor: props.bgColor, color: props.color }}
    >
      <div className="credit-card-flag">
        <img
          src={props.type === 'Visa' ? 'img.visa.png' : masterCardLogo}
          alt="Credit Card Flag"
        />
      </div>

      <div className="credit-card-number">{hideCardNumber(props.number)}</div>
      <span>
        {' '}
        {`Expires ${props.expirationMonth}/${String(
          props.expirationYear
        ).substr(2)}`}
      </span>

      {props.bank}
      <p className="credit-card-owner">{props.owner}</p>
    </div>
  );
}

export default CreditCard;
