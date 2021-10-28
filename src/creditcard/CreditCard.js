import React from 'react';
import './CreditCard.css';

function CreditCard(props) {
  return (
    <div
      style={{
        rounded: '25px',
        margin: '20px',
        border: '2px',
        width: '30vh',
        border: '2px solid black',
        backgroundColor: `${'props.bgColor'}`,
        padding: '10px',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        fontSize: '13px',
      }}
    >
      <div className="top">
        <img src={props.type} alt="" />
      </div>
      <p>
        <b>{props.number.substr(-4)}</b>
      </p>
      <p className="bottom">
        Expires: {props.expirationMonth}/
        {props.expirationYear.toString().substr(-2)}&nbsp;&nbsp;&nbsp;
        {props.bank}
      </p>
      <p className="bottom">{props.owner}</p>
      {/* <p>{props.bgColor}</p> */}
      {/* <p>{props.color}</p> */}
    </div>
  );
}

export default CreditCard;
