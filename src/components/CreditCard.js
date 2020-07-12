import React from 'react';

const CreditCard = (props) => {
  let cardType;
  if (props.type === 'Visa') {
    cardType = '/img/visa.png';
  } else if (props.type === 'Master Card') {
    cardType = '/img/master-card.svg';
  }


  return (
    <div className="credit-card" style={{backgroundColor: props.bgColor, color: props.color}}>
      <img src={cardType} alt="Card Type" className="card-image"/>
      <h5> <span>●●●● ●●●● ●●●● </span>{props.number.substring(12,16)}</h5>
      <p><span>Expires {props.expirationMonth}/{props.expirationYear}</span> {props.bank}</p>
      <p>{props.owner}</p>
    </div>
  );
};

export default CreditCard;
