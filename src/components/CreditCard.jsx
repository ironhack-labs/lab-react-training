import React from 'react'

function CreditCard(props) {
    const {type, number, expirationMonth, expirationYear, bank, owner, bgColor, color} = props
  
  type = ["Visa", "Master card"]

    return (
      <div
        style={{
          backgroundColor: `${bgColor}`,
          color: `${color}`,
          borderRadius: '15px',
          width: '350px',
          height: '100px'
        }}
      >
        <p>{type}</p>
        <number>{number}</number>
        <p>{expirationMonth}</p>
        <p>{expirationYear}</p>
        <p>{bank}</p>
        <p>{owner}</p>
      </div>
    );
}

export default CreditCard