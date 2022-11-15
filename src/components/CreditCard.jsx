import React from 'react'

function CreditCard(props) {
    const {type, number, expirationMonth, expirationYear, bank, owner, bgColor, color} = props;
  return (
    <div style={{backgroundColor: bgColor, color: color}}>
        <div><p>{type}</p></div>
        <div><p>{number}</p></div>
        <div>
            <p>Expiration Month: {expirationMonth}</p>
            <p>Expiration Year: {expirationYear}</p>
            <p>{bank}</p>
        </div>
        <div><p>{owner}</p></div>
    </div>
  )
}

export default CreditCard