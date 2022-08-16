import React from 'react'

function CreditCard(props) {

    const {type, number, expirationMonth, expirationYear, bank, owner, bgColor, color} = props


  return (
    <div style={{backgroundColor: `${bgColor}`, color: `${color}` }}>
        <h2>{type}</h2>
        <h1>{number}</h1>
        <h4>Expires: {expirationMonth}/{expirationYear}</h4>
        <h4>{bank}</h4>
        <h4>{owner}</h4>
    </div>
  )
}

export default CreditCard