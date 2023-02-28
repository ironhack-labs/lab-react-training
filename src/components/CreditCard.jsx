import React from 'react'

function CreditCard(props) {
    const {type, number, expirationMonth, expirationYear, bank, owner, bgColor, color} = props;
    const divStyle = {
        backgroundColor: `${bgColor}`,
        color: `${color}`
    }
    const num = number.split('');
    const newNum = num.splice(11,4);
    const year= expirationYear.toString().split('')
    const newYear= year.splice(2,2)
  return (
    <div style={divStyle}>
    <div>{type}</div>
    <div>•••• •••• •••• {newNum}</div>
    <div>
        <p>Expires: {expirationMonth}/{newYear}</p>
        <p>{bank}</p>
        <p>{owner}</p>
    </div>
    </div>
  )
}

export default CreditCard