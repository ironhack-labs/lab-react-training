import React from 'react'

function CreditCard(props) {
    const {type, number, expirationMonth, expirationYear, bank, owner, bgColor, color} = props
    const divStyle = {
        color: `${color}`,
        backgroundColor:`${bgColor}`,
        
    }
  return (
    <div style={divStyle} className="cards">
        <p>{type}</p>
        <p>············{number.slice(12)}</p>
        <p>{expirationMonth}/{expirationYear} {bank}</p>
        <p>{owner}</p>

    </div>
  )
}

export default CreditCard