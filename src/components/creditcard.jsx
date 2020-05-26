import React from 'react';
import './creditcard.css';

const CreditCard = (props) => {
  const type = props.type;
  const number = props.number;
  const expirationMonth = props.expirationMonth;
  const expirationYear = props.expirationYear;
  const bank = props.bank;
  const owner = props.owner;
  const bgColor = props.bgColor;
  const color = props.color;

  let logo;
  if (type.toLowerCase() === 'visa') {
    logo = './img/visa.png';
  } else {
    logo = './img/master-card.svg';
  }

  let numberarray = number.split('');
  for (let i = 0; i < numberarray.length - 4; i++) {
    numberarray[i] = '• ';
  }
  let copynumber = numberarray.join('');

  return (
    <div
      className="card"
      style={{ backgroundColor: `${bgColor}`, color: `${color}` }}
    >
      <div className="right">
        <img src={logo} alt="logoCard" className="logoCard" />
      </div>
      <div className="left">
        <h3>{copynumber}</h3>
        <span>
          {expirationMonth}/{expirationYear}
        </span>
        <span>{bank}</span>
        <p>{owner}</p>
      </div>
    </div>
  );
};

export default CreditCard;
