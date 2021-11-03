import React from 'react';

function CreditCard(props) {
  return (
    <div
      className="credit-card-container"
      style={{ backgroundColor: props.bgColor, color: props.color }}
    >
      <div className="credit-card-logo">
        <img
          
          src={props.src}
          alt="credit card logo"
        />
      </div>

      <h4 className="credit-card-number">
        {props.number.toString().replace(/.(?=.{4})/g, '·')}
      </h4>
      <div className="credit-card-inline">
        <p>
          Expires {props.expirationMonth.toString()}/
          {props.expirationYear.toString()}
        </p>
        <p>{props.bank}</p>
      </div>
      <p>{props.owner}</p>
    </div>
  );
}

export default CreditCard;
