import React from 'react';
import './CreditCard.css';

const CreditCard = (props) => {
  const creditCardStyle = {
    backgroundColor: `${props.bgColor}`,
    color: `${props.color}`,
  };
  const cardNumber = props.number.slice(-4);
  const expiryDate = props.expirationYear;
  let expires = expiryDate.toString().slice(-2);
  //   console.log(expires);
  //   console.log(cardNumber);
  return (
    <div className="credit__card" style={creditCardStyle}>
      <div className="card__type">
        <p>{props.type}</p>
      </div>

      <h2>**** **** **** {cardNumber}</h2>
      <div className="bank__info">
        <p className="details">
          {props.expirationMonth} / {expires} {''}
        </p>
        <p className="details">{props.bank}</p>
      </div>
      <div>
        <p className="owner">{props.owner}</p>
      </div>
    </div>
  );
};

export default CreditCard;
