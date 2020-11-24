import React from 'react';

const CreditCard = (props) => {
  return (
    <div
      className="p-3 m-3"
      style={{
        display: 'inline-block',
        backgroundColor: props.bgColor,
        color: props.color,
        width: '20rem',
        height: '11rem',
        borderRadius: '0.8rem',
      }}
    >
      <div className="my-2 text-right">
        <img
          src={props.type === 'Visa' ? '/img/visa.png' : '/img/master-card.svg'}
          alt="franchise"
          className="flex-row-reverse"
          style={{ width: '3rem', height: 'auto' }}
        />
      </div>
      <div className="my-2 text-center" style={{ fontSize: '1.9rem' }}>
        •••• •••• •••• {props.number.slice(12)}
      </div>
      <div className="my-2">
        Expires {props.expirationMonth}/{props.expirationYear}{' '}
        <span className="ml-4">{props.bank}</span> <br />
        {props.owner}
      </div>
    </div>
  );
};

export default CreditCard;
