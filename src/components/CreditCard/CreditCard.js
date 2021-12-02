import React from 'react';
import './CreditCard.css';
import visa from '../../assets/images/visa.png';
import mastercard from '../../assets/images/master-card.svg';

const CreditCard = (props) => {
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

  let img = visa;

  if (type === 'Visa') img = visa;
  else img = mastercard;

  const divStyle = {
    color: `${color}`,
    backgroundColor: `${bgColor}`,
  };



  function hiddenNumbers(card) {
    let hideNumbers = [];
    for (let i = 0; i < card.length; i++) {
      if (i < card.length - 4) {
        hideNumbers.push('•');
      } else {
        hideNumbers.push(card[i]);
      }
    }
    return hideNumbers.join('');
  }

  return (
      <div style={divStyle} className="credit-card">
        <img className="credit-img" src={img} alt="credit-img" />
        <p className="credit-numb">{hiddenNumbers(number)}</p>
        <p className="credit-details">
          Expires {expirationMonth}/{expirationYear} <span>{bank}</span>
        </p>
        <p className="credit-details">{owner}</p>
      </div>
  );
};

export default CreditCard;
