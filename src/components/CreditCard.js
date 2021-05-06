import React from 'react';
import '../App.css';

function CreditCard(props) {
  const lastDigits = Array.from(`${props.number}`).slice(12);

  const visaLogo =
    'https://logos-world.net/wp-content/uploads/2020/04/Visa-Logo-2006-2014.png';
  const masterCardLogo =
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1000px-Mastercard-logo.svg.png';

  let logo;
  if (props.type === 'Visa') {
    logo = visaLogo;
  } else {
    logo = masterCardLogo;
  }

  let month;
  if (props.expirationMonth < 10) {
    month = `0${props.expirationMonth}`;
  } else {
    month = props.expirationMonth;
  }

  const style = {
    color: `${props.color}`,
    background: `${props.bgColor}`,
  };

  return (
    <div className="credit-cards">
      <div className="single-card" style={style}>
        <img src={logo} alt="Credit card logo"></img>
        <p>**** **** **** {lastDigits}</p>
        <p>
          Expires {month} / {props.expirationYear - 2000}
        </p>
        <p>{props.bank}</p>
        <p>{props.owner}</p>
      </div>
    </div>
  );
}

export default CreditCard;
