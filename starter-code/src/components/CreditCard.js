import React from "react";

const CreditCard = props => {
  const expMth = props.expirationMonth;

  function displayExp(num) {
    if (num > 9) {
      return num;
    } else {
      return `0${num}`;
    }
  }

  function displayNumber(num) {
    const lastFour = num.slice(num.length - 4, num.length);
    return `•••• •••• •••• ${lastFour}`;
  }

  return (
    <div className="CreditCard">
      <img className="imgCreditCard" src="/img/visa.png" />
      <p className="text-center white-text">{displayNumber(props.number)}</p>
      <p className="white-text">
        Expires {displayExp(expMth)} <span>{props.bank}</span>{" "}
      </p>
      <p className="white-text">{props.owner}</p>
    </div>
  );
};

export default CreditCard;
