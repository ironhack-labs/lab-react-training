import React from 'react';

const CreditCard = (props) => {
  return (
    <div>
      <h1>CreditCard</h1>
      <div>
        {props.type === 'Visa' ? (
          <img style={{ height: '15px' }} src="./img/visa.png" />
        ) : (
          <img style={{ height: '15px' }} src="./img/master-card.svg" />
        )}
      </div>

      <div>**** **** **** **** {props.number.slice(-4)}</div>

      <div>
        <div>
          Expires{' '}
          {props.expirationMonth < 10
            ? `0${props.expirationMonth}`
            : props.expirationMonth}
          /{props.expirationYear.toString().slice(2)}
        </div>

        <div>{props.bank}</div>
      </div>

      <div>{props.owner}</div>
    </div>
  );
};

export default CreditCard;
