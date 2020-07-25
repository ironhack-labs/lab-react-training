import React from 'react';

const CreditCard = (props) => {
  //Logo tarjeta
  const type = (card) => {
    if (type === 'Visa') {
      return './img/visa.png';
    } else {
      return './img/master-card.svg';
    }
  };

  //Card number

  const cardNumber = (number) => {
    return number.slice(-4);
  };

  //Card year

  const cardYear = (number) => {
    return number.toString().slice(-2);
  };

  return (
    <div
      className="CreditCard"
      style={{ backgroundColor: props.bgColor, color: props.color }}
    >
      <div className="type">
        <img alt="Credit Card logo" src={type(props.type)}></img>
      </div>

      <div className="number">
        <h4>.... .... .... .... {cardNumber(props.number)}</h4>
      </div>
      <div className="lastDivCard">
        <p className="data">
          Expires: {props.expirationMonth} / {cardYear(props.expirationYear)}{' '}
          {props.bank}
        </p>

        <p className="owner">{props.owner}</p>
      </div>
    </div>
  );
};

export default CreditCard;
