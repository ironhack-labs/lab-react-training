import React from 'react';


const CreditCard = (props) => {

  return (
    <div
      style={{
        backgroundColor: `${props.bgColor}`,
        color: props.color,
        padding: '50px',
        margin: '10px',
        border: '2px solid black',
        width: '28%',
        borderRadius: '10px',
      }}
    >
      <p>{props.type}</p>
      <h3>{props.number}</h3>
      {props.expirationMonth < 10 ? (
        <p>
          Expires 0{props.expirationMonth}/
          {props.expirationYear.toString().substr(-2)} {props.bank}
        </p>
      ) : (
        <p>
          Expires {props.expirationMonth}/
          {props.expirationYear.toString().substr(-2)} {props.bank}
        </p>
      )}
      <p>{props.owner}</p>
    </div>
  );
};

export default CreditCard;
