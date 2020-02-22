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
    <div className="CreditCard" style={props.style}>
      <img className="imgCreditCard" src="/img/visa.png" />
      <p className="text-center" style={(props.color = props.color)}>
        {displayNumber(props.number)}
      </p>
      <p>
        Expires {displayExp(expMth)} <span>{props.bank}</span>{" "}
      </p>
      <p>{props.owner}</p>
    </div>
  );
};

export default CreditCard;
