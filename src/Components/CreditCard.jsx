import React from 'react';

const CreditCard = (props) => {
  function logo() {
    if (props.type === 'Visa')
      return 'https://seeklogo.com/images/V/visa-logo-CF29426B98-seeklogo.com.png';
    if (props.type === 'Master Card')
      return 'https://seeklogo.com/images/M/Master_Card-logo-027CB51F96-seeklogo.com.png';
  }

  function month() {
    return props.expirationMonth < 10
      ? `0${props.expirationMonth.toString()}`
      : props.expirationMonth;
  }

  return (
    <div
      className="creditCard"
      style={{
        backgroundColor: props.bgColor,
        color: props.color,
      }}
    >
      <img src={logo()} alt="{props.type}" />
      <p className="number">•••• •••• •••• {props.number.slice(12, 17)}</p>
      <p className="details">
        Expires {month()}/{props.expirationYear.toString().slice(2, 4)}{' '}
        <span>{props.bank}</span>
      </p>
      <p className="details">{props.owner}</p>
    </div>
  );
};

export default CreditCard;
