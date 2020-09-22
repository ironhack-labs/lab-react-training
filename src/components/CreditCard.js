import React from 'react';

function CreditCard(props) {
  const {
    type,
    number,
    expirationMonth,
    expirationYear,
    bank,
    owner,
    bgColor,
    color
  } = props;

  const hashed_number = "•••• •••• •••• " + number.slice(-4);

  let imgUrl = (type === 'Master Card') ? 
    '../img/master-card.svg' : 
    '../img/visa.png';

  return (
    <div className="credit-card" style={{backgroundColor: bgColor, color: color}}>
      <img src={imgUrl} alt={type}/>
      <h1>{hashed_number}</h1>
      <p>Expires {('0' + expirationMonth).slice(-2)}/{('0' + expirationYear).slice(-2)}   {bank}</p>
      <p>{owner}</p>
    </div>
  );
}

export default CreditCard;