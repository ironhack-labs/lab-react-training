import React from 'react';


function CreditCard({
  type,
  number,
  bank,
  owner,
  bgColor,
  color,
  expirationMonth,
  expirationYear,
}) {
  const lastFourDigits = number.substr(-4, 4);
  const hashNumbers = '**** **** ****';

  const divStyle = {
    backgroundColor: bgColor,
    color: color,
    width: "30%",
    
  }

  return (
    <div style={divStyle}>
      <img src={imageUrls(type)} alt="visa o mastercard" style ={{height:"20px"}}/>
      <h2>{`${hashNumbers} ${lastFourDigits}`}</h2>
      <p>
        Expires <span>{formatNumber(expirationMonth)}</span>/
        <span>{formatNumber(expirationYear)}</span> <span>{`${bank}`}</span>
      </p>
      <p>{`${owner}`}</p>
    </div>
  );
}

const formatNumber = (number) => `0${number}`.substr(-2);

const imageUrls = (type) => {
  const urls = {
    Visa: '../img/visa.png',
    'Master Card': '../img/master-card.svg',
  };
  return urls[type];
};

export default CreditCard;
