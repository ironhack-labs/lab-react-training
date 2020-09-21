import React from 'react';
import './CreditCard.css';

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

  let logo;
  if (type === 'Visa') {
    logo =
      'https://5c6c2a0de07b084ce35373ee--determined-aryabhata-a8a833.netlify.app/img/visa.png';
  } else {
    logo =
      'https://5c6c2a0de07b084ce35373ee--determined-aryabhata-a8a833.netlify.app/img/master-card.svg';
  }

  let ccNumber = '';
  for (let i = 0; i < number.length; i++) {
      if (i >= 12) {
        ccNumber += number[i];
      } else if (i == 3 || i == 7 || i == 11) {
        ccNumber += '• ';
      } else {
        ccNumber += '•'
      }
  }

  let expMonth;
  if (expirationMonth.toString().length === 1) {
    expMonth = '0' + expirationMonth.toString();
  } else {
    expMonth = expirationMonth.toString();
  }

  const expYear = expirationYear.toString().substr(2, 2);

  return (
    <div
      className="credit-card"
      style={{
        backgroundColor: `${bgColor}`,
        color: `${color}`,
      }}
    >
      <div id="logo-box">
        <img src={logo} alt="" />
      </div>
      <div id="number-box">
        <p>{ccNumber}</p>
      </div>
      <div id="details-box">
        <p>
          Expires {expMonth}/{expYear} &nbsp;&nbsp;&nbsp; {bank}
        </p>
        <p>{owner}</p>
      </div>
    </div>
  );
};

export default CreditCard;
