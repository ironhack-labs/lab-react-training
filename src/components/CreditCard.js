import React from 'react';

const CreditCard = (props) => {
  const hiddenCharacters = (number) => {
    let arrNumbers = number.toString().split('');
    let arrHiddenNumbers = arrNumbers.map((el, index) =>
      index < 12 ? (el = '•') : el
    );
    let arrWithSpaces = [];
    arrHiddenNumbers.forEach((el) =>
      arrWithSpaces.push(arrHiddenNumbers.splice(0, 4))
    );
    arrWithSpaces.forEach((el) => el.push(' '));
    arrWithSpaces = arrWithSpaces.flat().join('');
    return arrWithSpaces;
  };
  return (
    <div
      className="card"
      style={{ backgroundColor: props.background, color: props.color }}
    >
      <div className="logo">
        <img src={props.cardImg} alt="Card" />
      </div>
      <span className="number">{hiddenCharacters(props.number)}</span>
      <div className="flex-row">
        <span className="expiration-date">
          Expires {props.expirationMonth} / {props.expirationYear}
        </span>
        <span className="bank">{props.bank}</span>
      </div>
      <span className="owner">{props.owner}</span>
    </div>
  );
};

export default CreditCard;
