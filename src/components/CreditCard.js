import React from 'react'

function CreditCard(props) {
  const cardColor = {
    backgroundColor: props.bgColor,
    color: props.color,
  };

  return (
    <div style={cardColor}>
      <p>
        <h4> {props.type} </h4>
      </p>
      <p>
        <h2> {`**** **** **** ` + props.number.slice(-4)} </h2>
      </p>
      <p>
        <h4> Expires {`${props.expirationMonth}/${props.expirationYear}`} </h4>
      </p>
      <p>
        <h4> {props.bank} </h4>
      </p>
      <p>
        <h4> {props.owner} </h4>
      </p>
    </div>
  );
}

export default CreditCard
