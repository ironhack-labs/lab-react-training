import React from 'react'

function CreditCard(props) {
    return (
      <div
        className="CreditCard"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          border: '1px solid white',
          background: `${props.bgColor}`,
          color: `${props.color}`,
        }}
      >
        <p>{props.type}</p> <br/>
        <p>{props.number.substr(-4)}</p> <br/>
        <p>
          Expires: {props.expirationMonth}/{props.expirationYear}
        </p> <br/>

        <p> {props.bank}</p>
        <p> {props.owner}</p>
      </div>
    );
}

export default CreditCard
