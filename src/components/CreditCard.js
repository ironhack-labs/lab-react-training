import React from 'react';

export default function CreditCard(props) {
  let secretNum = `**** **** **** ` + props.number.slice(-4);
  let style = { color: props.color, backgroundColor: props.bgColor };

  return (
    <div className="creditCard" style={style}>
      <div>
        <div>
          <p>{props.type}</p>
        </div>
        <div>
          <p>{props.bank}</p>
        </div>
      </div>
      <div className="creditPersonal">
        <p>{secretNum}</p>
        <p>
          Ex:{props.expirationMonth}/{props.expirationYear}
        </p>
        <p>{props.owner}</p>
      </div>
    </div>
  );
}
