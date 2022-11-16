import React from 'react'

//TODO Make it pretty

function CreditCard(props) {
    const {type, number, expirationMonth, expirationYear, bank, owner, bgColor, color} = props;
    const goodNumber = `**** **** **** ${number[12]}${number[13]}${number[14]}${number[15]}`
    const goodYear = expirationYear.toString().slice(2);
    const textColor = { 
        color: color
    }

  return (
    <div style={{backgroundColor: bgColor}}>
      <h2>{type}</h2>
      <p style={textColor}>{goodNumber}</p>

      <div>
        <p style={textColor}>Expires {expirationMonth}/{goodYear} <span>{bank}</span></p>
      </div>

      <p style={textColor}>{owner}</p>
    </div>
  )
}

export default CreditCard