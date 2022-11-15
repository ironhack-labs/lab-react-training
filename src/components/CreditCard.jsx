import React from 'react'

function CreditCard(props) {
    const {number, expirationMonth, expirationYear, bank, owner, bgColor, color} = props
    const style = {
        backgroundColor: `${bgColor}`,
        color: `${color}`,
    }



  return (
    <div style={style}>
    <span>.... .... .... {number[12]}{number[13]}{number[14]}{number[15]}</span>
    <p>Expires {expirationMonth}/{expirationYear}<span> {bank}</span></p>
    <p>{owner}</p>
    </div>
  )
}

export default CreditCard