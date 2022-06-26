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


  const newNumber = (number) => {
    number = number.number
    return `•••• •••• •••• ${number.toString().slice(12, 16)}`
  }

  return (
    <div
      className="credit-card"
      style={{ backgroundColor: bgColor, color: color }}
    >
      <div className="card-type-container">{type}</div>
      <div className="card-number-container">{newNumber({number})}</div>
      <div className="other-info-container">
        <div className='expire-bank'>
          <div>
            Expires {expirationMonth}/{expirationYear}
          </div>
          <div>{bank}</div>
        </div>
        <div>{owner}</div>
      </div>
    </div>
  );
};

export default CreditCard;

// type: A string that can be "Visa" or "Master Card"
// number: A string that is the number of the credit card. For security reasons, you should only display the 4 last digits 😉
// expirationMonth: A number that represents the month, between 1 and 12
// expirationYear: A number that represents the year
// bank: A string that represents the name of the bank
// owner: A string that represents the name of the owner
// bgColor: A string for the background color of the card
// color: A string for the text color of the card
