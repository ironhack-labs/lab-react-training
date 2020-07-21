import React from 'react';
import './../App.css';

const CreditCard = (props) => {
  return (
    <div className="cbs">
      <div
        className="credit-card"
        style={{
          backgroundColor: `${props.bgColor}`,
          color: `${props.color}`,
        }}
      >
        <div className="image padding ">
          <img className="cb-img" src={props.type} alt="visa vs mastercard" />
        </div>
        <div className="number padding">
          <p>••••••••••••{props.number.substr(-4)}</p>
        </div>
        <div className="expiration padding">
          <p>
            Expires {props.expirationMonth}/{props.expirationYear}
          </p>
          <p className="bank">{props.bank}</p>
          <p>{props.owner}</p>
        </div>
      </div>
    </div>
  );
};

export default CreditCard;
