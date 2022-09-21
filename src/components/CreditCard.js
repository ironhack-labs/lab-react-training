import React from 'react';
import visaLogo from '../assets/images/visa.png';

import masterCardLogo from '../assets/images/mastercard-logo.png';

function CreditCard({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color,
}) {
  const lastFourNum = { number }.number.substr(-4);
  //   console.log({ lastFourNum });
  const yearShort = Number(String({ expirationYear }.expirationYear).slice(-2));
  //   console.log({ yearShort });
  let month = { expirationMonth }.expirationMonth;
  if ({ expirationMonth }.expirationMonth <= 9) {
    month = '0' + { expirationMonth }.expirationMonth;
  }

  let imgLogo = '';
  if ({ type }.type === 'Visa') {
    imgLogo = { visaLogo }.visaLogo;
    // console.log(imgLogo);
  } else if ({ type }.type === 'Master Card') {
    imgLogo = { masterCardLogo }.masterCardLogo;
    // console.log(imgLogo);
  }

  //   console.log(month);
  return (
    <div
      className="creditCard"
      style={{
        backgroundColor: { bgColor }.bgColor,
        color: { color }.color,
      }}
    >
      <img className="imgLogoCard" src={imgLogo} alt="logo" />

      <h2 className="number"> •••• •••• •••• {lastFourNum} </h2>
      <div className="userInformation">
        <div className="expirationAndBank">
          <p className="expirationDate">
            Expires {month}/{yearShort}
          </p>
          <p className="bank">{bank} </p>
        </div>
        <p className="owner">{owner} </p>
      </div>
    </div>
  );
}

export default CreditCard;
