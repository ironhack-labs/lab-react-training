import React from 'react'

// eslint-disable-next-line react/prop-types
export default function CreditCard({type, number, expirationMonth, expirationYear, bank, owner, bgColor, color}) {

  const divStyle ={
    backgroundColor: bgColor,
    color: color
  }

  const fixedMonth = expirationMonth < 10 ? `0${expirationMonth}` : expirationMonth;
  
  return (
    <div style={divStyle} className="credit-card">
        <div className="upper-info">
            <span>{type}</span>
            <span>•••• •••• •••• {number.slice(number.length - 4)}</span>
        </div>

        <div className="down-info">
            <div className="expiration-info">
                <p>Expires {fixedMonth}/{expirationYear}</p>
                <p>{bank}</p>
            </div>
            <p>{owner}</p>
        </div>
    </div>
  )
}
