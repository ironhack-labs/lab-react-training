import React from 'react'

function CreditCard(props) {
    const {type, number, expirationMonth, expirationYear, bank, owner, bgColor, color} = props
  return (
    <div style={{backgroundColor: bgColor, color: color}} className="cc">
      <p>{type}</p>
      <p>{number}</p>
      <p>Expires {expirationMonth}/{expirationYear}</p>
      <p>{bank}</p>
      <p>{owner}</p>
    </div>
  )
}

export default CreditCard
