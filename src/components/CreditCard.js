import React from 'react';

const CreditCard = (props) => {
  let cardType;
  if (props.type === 'Visa') {
    cardType = '/img/visa.png';
  } else if (props.type === 'Master Card') {
    cardType = '/img/master-card.svg';
  }


  return (
    <div className="credit-card" style={{backgroundColor: props.bgColor}}>
      <img src={cardType} alt="Card Type" className="card-image"/>
      <h5> <span>●●●● ●●●● ●●●● </span>{props.number.substring(12,16)}</h5>
      <p>Expires {props.expirationMonth}/{props.expirationYear}</p>
      <p>{props.bank}</p>
      <p>{props.owner}</p>
    </div>
  );
};

export default CreditCard;
