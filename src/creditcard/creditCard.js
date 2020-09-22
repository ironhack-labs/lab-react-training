import React from 'react';
import './creditCard.css';

function CreditCard(props) {
  const divStyle = {
    backgroundColor: `${props.bgColor}`,
    color: `${props.color}`,
  };

  const cardNumber = `**** **** **** ${props.number.slice(12)}`;

  const expYear = props.expirationYear.toString().slice(2);

  const expDate = `${props.expirationMonth}/${expYear}`;

  return (
    <div className="content" style={divStyle}>
      <div className="type">
        <p>
          {props.type === 'Visa' && (
            <img
              className="image"
              src="/img/visa.png"
              alt=""
              height="24"
              width="60"
            />
          )}
        </p>
        <p>
          {props.type === 'Master Card' && (
            <img
              className="image"
              src="/img/master-card.svg"
              alt=""
              height="25"
              width="45"
            />
          )}
        </p>
      </div>
      <div className="number">
        <p>{cardNumber}</p>
      </div>
      <div>
        <div className="bank-information">
          {props.expirationMonth < 10 && (
            <p className="exp-date">Expires 0{expDate}</p>
          )}
          {props.expirationMonth >= 10 && (
            <p className="exp-date">Expires {expDate}</p>
          )}
          <p style={{ paddingLeft: 25 }}>{props.bank}</p>
        </div>
        <p className="owner">{props.owner}</p>
      </div>
    </div>
  );
}

export default CreditCard;
