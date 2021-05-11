import React from 'react';
import '../App.css';

function CreditCard(props) {
  const {
    type,
    number,
    expirationMonth,
    expirationYear,
    bank,
    owner,
    bgColor,
    color,
  } = props;

  const lastDigits = Array.from(`${number}`).slice(12);

  const cardType = {
    Visa:
      'https://logos-world.net/wp-content/uploads/2020/04/Visa-Logo-2006-2014.png',
    'Master Card':
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1000px-Mastercard-logo.svg.png',
  };

  let month;
  if (expirationMonth < 10) {
    month = `0${expirationMonth}`;
  } else {
    month = expirationMonth;
  }

  const style = {
    color: `${color}`,
    background: `${bgColor}`,
  };

  return (
    <div className="credit-cards">
      <div className="single-card" style={style}>
        <img src={cardType[type]} alt="Credit card logo"></img>
        <p>**** **** **** {lastDigits}</p>
        <p>
          Expires {month} / {expirationYear - 2000}
        </p>
        <p>{bank}</p>
        <p>{owner}</p>
      </div>
    </div>
  );
}

export default CreditCard;
