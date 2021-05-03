import React from 'react';
import './CreditCard.css';
// type: A string that can be "Visa" or "Master Card"
// number: A string that is a number of the credit card. You will only display the 4 last digits for security reasons 😉
// expirationMonth: A number that represents the month, between 1 and 12
// expirationYear: A number that represents the year
// bank: A string that represents the name of the bank
// owner: A string that represents the name of the owner
// bgColor: A string for the background color of the card
// color: A string for the text color of the card

export default function CreditCard(props) {
  const maskedNumber = props.number
    .slice(-4)
    .padStart(props.number.length, '•');

  const cardLogoImg = {
    Visa: process.env.PUBLIC_URL + 'img/visa.png',
    'Master Card': process.env.PUBLIC_URL + 'img/master-card.svg',
  };

  //    props.type === 'visa' ? process.env.PUBLIC_URL + 'img/visa.png' : process.env.PUBLIC_URL + 'img/visa.png'

  return (
    <div
      className="credit-card"
      style={{ backgroundColor: props.bgColor, color: props.color }}
    >
      {/* <div className="type">{props.type}</div> */}
      <img src={cardLogoImg[props.type]} alt="credit card" />
      <div className="card-number">{maskedNumber}</div>
      <div className="details">
        <div>
          <p>
            Expires {props.expirationMonth}/{props.expirationYear}
          </p>
          <p>{props.owner}</p>
        </div>
        <div>
          <p>{props.bank}</p>
        </div>
      </div>
    </div>
  );
}
