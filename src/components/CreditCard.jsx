import React from 'react';

const CreditCard = (props) => {
  const number = props.number;
  const ccNumber = number.substring(number.length - 4);
  const ccStyle = {
    backgroundColor: props.bgColor,
    color: props.color,
  };
  return (
    <div style={ccStyle} className="border-box creditcard">
      <h4>• • • • • • • • • • • {ccNumber}</h4>
      <p>
        expires: {props.expirationMonth}/{props.expirationYear}
      </p>
      <p>{props.owner}</p>
      <p>{props.bank}</p>
    </div>
  );
};

export default CreditCard;
