import React from 'react';
import './CreditCard.css';

const CreditCard = (props) => {
  const divStyle = (bgColor, color) => {
    return { backgroundColor: `${bgColor}`, color: `${color}` };
  };

  const cardType = (string) => {
    if (string === 'Visa' || string === 'visa') {
      return 'img/visa.png';
    } else if (string === 'Master Card' || string === 'master card') {
      return 'img/master-card.svg';
    }
  };

  const cardNumber = (number) => {
    return `···· ···· ···· ${number.substr(number.length - 4)}`;
  };

  const getMonth = (month) => {
    const monthString = month.toString();
    if (monthString.length === 1) {
      return `0${month}`;
    } else {
      return month;
    }
  };

  const getYear = (year) => {
    const yearStr = year.toString();

    return yearStr.substr(yearStr.length - 2);
  };

  return (
    <div className="credit-card" style={divStyle(props.bgColor, props.color)}>
      <div className="card-type">
        <img src={cardType(props.type)} alt="credit" />
      </div>
      <div className="card-number">
        <h1>{cardNumber(props.number)}</h1>
      </div>
      <div className="card-data">
        <div className="card-expire">
          <h5>
            Expires {getMonth(props.expirationMonth)}/
            {getYear(props.expirationYear)}
          </h5>
          <h5>{props.bank}</h5>
        </div>
        <h5>{props.owner}</h5>
      </div>
    </div>
  );
};

export default CreditCard;
