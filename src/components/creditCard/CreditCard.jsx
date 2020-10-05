import React from 'react';
import './creditCard.css';

const CreditCard = (props) => {
  const divStyle = {
    backgroundColor: `${props.bgColor}`,
  };

  let strNum = `${props.number}`;
  let countNum = '';

  for (let i = 0; i < strNum.length; i++) {
    countNum += '•';
  }
  let cardNum = countNum + `${strNum.slice(-4)}`;

  let cardNumber = [...cardNum]
    .map((num, i) => (i % 4 === 0 ? ' ' + ' ' + num : num))
    .join('')
    .trim();

  return (
    <div className="creditCard" style={divStyle}>
      <div className="logo">
        <img
          src={(() => {
            switch (props.type) {
              case 'Visa':
                return '/img/visa.png';
              case 'Master Card':
                return '/img/master-card.svg';
              default:
            }
          })()}
          alt="card"
        />
      </div>
      <div
        className="cardNumber"
        style={{
          color: (() => {
            switch (props.type) {
              case 'Visa':
                return 'white';
              case 'Master Card':
                return '#222222';
              default:
            }
          })(),
        }}
      >
        {cardNumber}
      </div>
      <div
        style={{
          color: (() => {
            switch (props.type) {
              case 'Visa':
                return 'white';
              case 'Master Card':
                return '#222222';
              default:
            }
          })(),
        }}
      >
        <span className="details">
          Expires {props.expirationMonth}/{props.expirationYear}
        </span>
        &nbsp; &nbsp; <span>{props.bank}</span>
        <br />
        {props.owner}
      </div>
    </div>
  );
};

export default CreditCard;
