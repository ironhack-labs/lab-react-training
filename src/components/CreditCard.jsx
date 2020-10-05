import React from 'react';

const CreditCard = (props) => {
  const divStyle = {
    backgroundColor: props.bgColor,
    color: props.color,
  };

  let cardType = '';
  if (props.type === 'Master Card') {
    cardType = './img/master-card.svg';
  } else {
    cardType = './img/visa.png';
  }

  let formatMonth = '';
  if (props.expirationMonth < 10) {
    formatMonth = "0" + props.expirationMonth;
  } else {
    formatMonth = props.expirationMonth;
  }

  return (
      <div className="card" style={divStyle}>
        <img className="card-logo" src={cardType} alt="" />
        <p className="cardNb">•••• •••• •••• {props.number}</p>
        <div className="card-data">
        Expires {formatMonth}/{props.expirationYear} {props.bank}
        <p>{props.owner}</p>
        </div>
      </div>
  );
};

export default CreditCard;
