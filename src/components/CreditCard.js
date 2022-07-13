import React from 'react';

function CreditCard(props) {
  return (
    <div
      style={{
        backgroundColor: props.bgColor,
        padding: '1rem',
        color: '#ffffff',
        width: '25%',
        minWidth: '25%',
        borderRadius: '10px',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'right' }}>
        <img src={props.type} alt={props.alt} style={{ width: '50px' }} />
      </div>
      <div>
        <p
          id="ccn"
          type="tel"
          inputMode="numeric"
          pattern="[0-9\s]{13,19}"
          placeholder="xxxx xxxx xxxx xxxx"
          style={{
            fontWeight: 'bold',
            fontSize: '1.5rem',
            margin: '0 auto',
            paddingTop: '2rem',
          }}
        >
          •••• •••• •••• {props.number.slice(-4)}
        </p>
        <div
          style={{
            display: 'flex',
            justifyContent: 'left',
            paddingTop: '2rem',
          }}
        >
          <p style={{ textAlign: 'left', fontWeight: 'bold' }}>
            {props.expirationMonth}/{props.expirationYear} {props.bank}{' '}
            <br></br> {props.owner}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CreditCard;
