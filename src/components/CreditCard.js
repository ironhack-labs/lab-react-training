import React from 'react';

const CreditCard = (props) => {
  return (
    <div className='CreditCard' style={{ backgroundColor: `${props.bgColor}`, color: `${props.color}` }}>
      <img src={props.type} alt="nada" style={{width: '1.5rem', height: 'auto'}}/>
      <p>{props.number}</p>
      <p>{props.expirationMonth}</p>
      <p>{props.expirationYear}</p>
      <p>{props.bank}</p>
      <p>{props.owner}</p>
    </div>
  );
};

export default CreditCard;
