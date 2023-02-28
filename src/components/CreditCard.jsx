import React from 'react'

function CreditCard(props) {
    const {type, number, expirationMonth, expirationYear, bank, owner, bgColor, color} = props
    let divStyle = {
        backgroundColor: `${bgColor}`,
        color: `${color}`
      };

  return (
    <div style={divStyle}>
        <h1>{type}</h1>
        <h1>············{number.slice(12)}</h1>
        <p>Expires {expirationMonth}/{expirationYear}</p>
        <p>{bank}</p>
        <p>{owner}</p>
    </div>
  )
}

export default CreditCard