import React from 'react';

export default function CreditCard(props) {

  const divStyle = {
    background: `${props.bgColor}`,
    color: `${props.color}`,
  };
  const isVisa = props.type === 'Visa';
  const selectImg = isVisa ? 'visa.png' : 'master-card.svg';

  return (
    <div className="mycard" style={divStyle}>
      <div className="flag">
        <img src={`/img/${selectImg}`} />
      </div>
      <div className="cardInfo">
        <div className="number">
          <p>
            <strong>•••• •••• •••• {props.number.substring(12)}</strong>
          </p>
          <div className="bank">
            <p>
              Expires {('0' + props.month).substring(-2)}/
              {props.year.toString().substring(2)}
            </p>
            <p>{props.bank}</p>
          </div>
          <div>
            <p>{props.owner}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
