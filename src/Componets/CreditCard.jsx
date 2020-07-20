import React from 'react';

const CreditCard = (props) => {
  let cardType;
  if (props.type === 'Visa') {
    cardType = '/img/visa.png';
  } else if (props.type === 'Master Card') {
    cardType = '/img/master-card.svg';
  }
  return (
    <div className="card" style={{ backgroundColor: props.bgColor }}>
      <img src={cardType} alt="Card" className="card-type" />

      <div className="card-numero">
        {' '}
        <span>xxxx xxxx xxxx </span>
        {props.number.substring(12, 16)}
      </div>
      <p className="card-text">
        <h4>
          Expires {props.expirationMonth}/{props.expirationYear}&nbsp; &nbsp;
          {props.bank}
        </h4>
        <h4>{props.owner}</h4>
      </p>
    </div>
  );
};

export default CreditCard;
