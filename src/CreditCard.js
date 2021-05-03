import React from 'react';

export default function CreditCard(props) {
  const pr = (cc) => {
    let newString = cc.slice(cc.length - 4);
    let otherNewString = cc.slice(0, -4);
    let xS = [];
    for (let i = 0; i < otherNewString.length; i++) {
      xS.push('*');
    }
    return xS.join('') + newString;
  };
  return (
    <div
      style={{
        backgroundColor: props.bgColor,
        color: props.color,
      }}
      className="CreditCard"
    >
      <div>
        <h1>{props.type}</h1>
        <h2>{pr(props.number)}</h2>
      </div>
      <div className="card-bottom">
        <p>
          expires end {props.expirationMonth}/{props.expirationYear}
        </p>
        <p>{props.bank} {props.lastName} {props.firstName}</p>
      </div>
    </div>
  );
}
