import React from 'react';
import styled from 'styled-components';

const CreditCard = (props) => {
  const Card = styled.div`
    display: inline-block;
    background-color: ${props.bgColor};
    color: ${props.color};
    width: 17rem;
    height: 9rem;
    border-radius: 0.8rem;
  `;

  return (
    <Card className="p-3 m-3">
      <div className="">
        <img
          src={props.type === 'Visa' ? '/img/visa.png' : '/img/master-card.svg'}
          alt="franchise"
          className="flex-row-reverse"
          style={{ width: '3rem', height: 'auto' }}
        />
      </div>
      <div className="">•••• •••• •••• {props.number.slice(12)}</div>
      <div className="">
        Expires {props.expirationMonth}/{props.expirationYear} {props.bank}{' '}
        <br />
        {props.owner}
      </div>
    </Card>
  );
};

export default CreditCard;
