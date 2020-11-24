import React from 'react';

const CreditCard = (props) => {
  let style = {
    backgroundColor: props.bgColor,
    fontSize: '15px',
    fontWeight: 'bold',
    textAlign: 'center',
    margin: '5px',
    paddingLeft: '5px',
    color: props.color,
  };

  let ccNum = props.number.slice(12);
  return (
    <div className="ccHolder">
      <div className="CreditCard" style={style}>
        <p className="ccType">{props.type}</p>
        <p className="ccNumber">**** **** **** {ccNum}</p>
        <p className="ccExp">
          {props.expirationMonth}/{props.expirationYear}{' '}
          <span className="ccBank">{props.bank}</span>
        </p>
        <p className="ccOwner">{props.owner}</p>
      </div>
    </div>
  );
};

export default CreditCard;
